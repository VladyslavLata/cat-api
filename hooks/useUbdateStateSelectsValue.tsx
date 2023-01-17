import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const useUbdateStateSelectsValue = (
  onChangeStateSelectsValue: (path: string) => void
) => {
  const router = useRouter();
  const firstPathString = useRef(router.asPath);
  const onFirstChangeStateSelectsValue = useRef(onChangeStateSelectsValue)

  useEffect(() => {
    onFirstChangeStateSelectsValue.current(firstPathString.current);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      onChangeStateSelectsValue(url);
    };

    const handleRouteChangeError = (
      error: { cancelled: boolean },
      url: string
    ) => {
      if (error.cancelled) {
        onChangeStateSelectsValue(url);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [onChangeStateSelectsValue, router.events]);
};
