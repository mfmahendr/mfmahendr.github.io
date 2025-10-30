import { useEffect } from "react";

export const useTurnstile = (submitRef) => {
  useEffect(() => {
    window.onTurnstileSuccess = () => {
      console.log("Challenge Success!");
      submitRef.current?.removeAttribute("disabled");
    };

    window.onTurnstileError = (errorCode) => {
      console.log("Challenge Error:", errorCode);
      submitRef.current?.setAttribute("disabled", "");
      if (errorCode !== "110200" && errorCode !== "400020") {
        setTimeout(() => window.turnstile?.reset("#turnstile-widget"), 5000);
      }
    };

    window.onTurnstileExpired = () => {
      console.log("Token expired");
    };
  }, [submitRef]);
};
