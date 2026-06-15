import { siteConfig } from "@/lib/config";

export default function Give() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Give</h1>
      <p className="text-gray-600 mb-8">
        Your generosity makes ministry possible. Thank you for partnering with {siteConfig.name} to serve El Paso and beyond.
      </p>
      <a
        href="#"
        className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
      >
        Give Online
      </a>
      <p className="text-gray-400 text-sm mt-6">
        You can also give in person during any service. Checks made payable to {siteConfig.name}.
      </p>
    </div>
  );
}
