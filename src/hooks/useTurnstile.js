import { useEffect } from "react";

export const useTurnstile = (submitRef) => {
  useEffect(() => {
    console.log("[Debug] Turnstile hook mounted");

    const sitekey = "0x4AAAAAABlC7VN9-IAe1vyU";
    const widgetId = "#turnstile-widget";

    const initTurnstile = () => {
      if (!window.turnstile) {
        console.warn("[Turnstile] not ready yet, retrying...");
        setTimeout(initTurnstile, 300);
        return;
      }

      console.log("[Turnstile] Rendering widget...");
      window.turnstile.render(widgetId, {
        sitekey,
        callback: () => {
          console.log("Challenge Success");
          submitRef.current?.removeAttribute("disabled");
        },
        "error-callback": (errorCode) => {
          console.log("Challenge Error:", errorCode);
          submitRef.current?.setAttribute("disabled", "");
          if (errorCode !== "110200" && errorCode !== "400020") {
            setTimeout(() => window.turnstile?.reset(widgetId), 10000);
          }
        },
        "expired-callback": () => {
          console.log("Token expired");
          submitRef.current?.setAttribute("disabled", "");
        },
      });
    };

    initTurnstile();

    return () => {
      // Cleanup saat unmount
      try {
        window.turnstile?.reset(widgetId);
      } catch (e) {
        console.log("[Turnstile] cleanup error:", e);
      }
    };
  }, [submitRef]);
};
