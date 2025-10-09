export default function About() {
  return (
    <div className="flex flex-col items-center justify-start px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">
        About <span className="text-blue-600">City Explorer Pro</span>
      </h2>

      <p className="max-w-2xl text-gray-700 leading-relaxed mb-8">
        City Explorer Pro is an interactive platform designed to help you discover
        the beauty, culture, and attractions of cities across the Philippines.
        Whether you’re exploring vibrant urban landscapes or serene countryside
        destinations, our app makes it easy to find the information you need —
        all in one place.
      </p>

      <div className="bg-gray-100 rounded-2xl shadow-md p-6 max-w-lg mb-8">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To make city exploration simple, informative, and inspiring —
          empowering travelers and locals alike to experience the Philippines
          like never before.
        </p>
      </div>

      <footer className="text-sm text-gray-500 mt-8">
        Developed by <span className="font-semibold text-black">Techweave</span> <br />
        © 2025 City Explorer Pro. All rights reserved.
      </footer>
    </div>
  );
}
