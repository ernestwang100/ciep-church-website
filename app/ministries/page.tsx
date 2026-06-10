export default function Ministries() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Ministries</h1>
      <p className="text-gray-600 mb-10">Find your place at CIEP Church — there&apos;s a community for everyone.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { name: "Children", description: "Programs for kids of all ages to grow in faith." },
          { name: "Youth / Teenagers", description: "A space for teens to connect, grow, and lead." },
          { name: "College Students", description: "Community and discipleship for young adults." },
          { name: "Men", description: "Gatherings, Bible study, and brotherhood for men." },
          { name: "Women", description: "Fellowship, prayer, and growth for women of all ages." },
          { name: "Small Groups", description: "Midweek groups for deeper community throughout El Paso." },
          { name: "Outreach", description: "Serving El Paso and beyond with hands and heart." },
        ].map((ministry) => (
          <div key={ministry.name} className="border border-gray-200 rounded-xl p-6">
            <h2 className="font-semibold text-gray-900 text-lg mb-1">{ministry.name}</h2>
            <p className="text-gray-600 text-sm">{ministry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
