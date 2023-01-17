import { useEffect, useRef } from "react"
import { useRouter } from "next/router";


export const useUbdateStateSelectsValue = (onChangeFirstStateSelectsValue: (path:string) => void ,onChangeStateSelectsValue: (path:string) => void, path: string ) => {
  const router = useRouter();


   useEffect(() => {
    onChangeFirstStateSelectsValue(path)
  }, [onChangeFirstStateSelectsValue, path]);

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

}