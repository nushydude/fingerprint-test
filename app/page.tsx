import {
  FpjsProvider,
  // FingerprintJSPro
} from '@fingerprintjs/fingerprintjs-pro-react'
import VisitorId from "./components/VisitorId";

export default function Home() {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: process.env.NEXT_PUBLIC_FINGERPRINT_API_KEY as string,
        // endpoint: [
        //   // "https://metrics.yourwebsite.com", 
        //   FingerprintJSPro.defaultEndpoint
        // ],
        // scriptUrlPattern: [
        //   // "https://metrics.yourwebsite.com/web/v<version>/<apiKey>/loader_v<loaderVersion>.js",
        //   FingerprintJSPro.defaultScriptUrlPattern
        // ],
        region: "eu"
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <VisitorId />
        </div>
      </main>
    </FpjsProvider>
  );
}
