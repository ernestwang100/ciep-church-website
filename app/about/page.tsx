export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-gray-600 mb-10">Learn who we are, what we believe, and what drives us as a community of faith in El Paso.</p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Story</h2>
          <p className="text-gray-600">[Church history placeholder]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Believe</h2>
          <p className="text-gray-600">[Statement of faith placeholder]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Pastor</h2>
          <p className="text-gray-600">[Pastor bio placeholder]</p>
        </div>
      </div>
    </div>
  );
}
