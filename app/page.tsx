
 "use client";

import { useState } from "react";

export default function Home() {

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/ai-send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: form.email,
      name: form.name,
      phone: form.phone,
      message: form.message,
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Thank you! AI response sent to your email.");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } else {
    alert("Failed to send response: " + data.error);
  }
};

return (
  <main className="min-h-screen bg-white text-gray-800">
{/* Navigation */} 
<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"> 
<div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center"> 
<div className="flex items-center gap-3">
  <img
    src="/logo-main.png"
    alt="NalamMind AI"
    className="h-12 w-auto"
  />

  <span className="text-2xl font-bold text-blue-900">
    NalamMind AI
  </span>
</div> 
      <div className="hidden md:flex gap-6 font-medium">
        <a href="#about" className="hover:text-blue-700">
          About
        </a>

        <a href="#program" className="hover:text-blue-700">
          Programs
        </a>

        <a href="#testimonials" className="hover:text-blue-700">
        Testimonials
        </a>
        <a href="#service" className="hover:text-blue-700">
          Who We Serve
        </a>
        <a href="#contact" className="hover:text-blue-700">
          Contact
        </a>
      </div>
    </div>
  </nav>

{/* Hero */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
  ↓
</div>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/nalam-mind-video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      NalamMind AI
    </h1>

    <h2 className="text-3xl md:text-5xl font-semibold max-w-5xl mx-auto leading-tight mb-6">
      Empowering Minds Through AI and Emotional Wellbeing
    </h2>

    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto">
      Helping families, schools, and educators build emotional resilience,
      wellbeing, and life skills through guided programs and AI-powered support.
    </p>

    <p className="text-lg text-white/90 mb-8 font-medium">
  Supporting Parents • Students • Educators • Schools<br/>
  🆓 Take our 5-Minute Parenting Wellness Check and discover your parenting strengths.
</p>

<div className="flex flex-wrap justify-center gap-4 mt-6">

  <a
    href="#contact"
    className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold"
  >
    Need Support?
  </a>
<a
  href="/parenting-check"
  className="bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-lg font-semibold text-white"
>
  Parenting Check
</a>
  <a
    href="#about"
    className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition"
  >
    Learn More
  </a>

</div>
  </div>
</section>

{/* Programs Section */}
<section id="program" className="scroll-mt-20 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">
      Our Programs
    </h2>

    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      Transformative wellbeing programs designed for parents,
      students, educators, and schools to build emotional
      resilience, confidence, and lifelong wellbeing.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition h-full">
        <div className="text-4xl mb-4">👨‍👩‍👧</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Parent Wellbeing Program
        </h3>
        <p className="text-gray-600">
           Empowering parents with practical tools, emotional resilience,
and mindful strategies to create healthier family relationships.
        </p>  
      </div>

      {/* Card 2 */}
     <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition h-full">
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Student Wellbeing Program
        </h3>
        <p className="text-gray-600">
          Develop confidence, emotional intelligence, resilience,
          focus, and positive habits for academic and personal growth.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition h-full">
        <div className="text-4xl mb-4">👩‍🏫</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Teacher Wellness Program
        </h3>
        <p className="text-gray-600">
          Support educators through stress management,
          emotional wellbeing practices, and professional growth strategies.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition h-full">
        <div className="text-4xl mb-4">🏫</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          School Wellness Framework
        </h3>
        <p className="text-gray-600">
          A comprehensive wellbeing ecosystem for schools,
          integrating students, parents, teachers, and leadership teams.
        </p>
      </div>

    </div>
  </div>
</section>
  {/* About */}
  <section id="about" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
      NalamMind AI
    </h3>
    <div className="max-w-5xl mx-auto text-center mb-16">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        NalamMind is an educational wellbeing platform committed to
        empowering parents, students, educators, and schools through
        meaningful guidance, practical resources, and evidence-informed
        support.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We believe that emotional wellbeing, positive relationships,
        resilience, and lifelong learning are essential foundations
        for personal and academic success.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Through assessments, educational resources, professional
        development initiatives, and supportive learning experiences,
        we help individuals and institutions grow with confidence,
        clarity, and purpose.
      </p>

    </div>

    {/* Mission & Vision */}

    <div className="grid md:grid-cols-2 gap-8 mb-16">

      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-4xl mb-4">🎯</div>

        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Our Mission
        </h3>

        <p className="text-gray-700 leading-relaxed">
          To make wellbeing education accessible, practical, and impactful
          by providing trusted resources, meaningful insights, and
          supportive pathways for growth.
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-4xl mb-4">🌍</div>

        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Our Vision
        </h3>

        <p className="text-gray-700 leading-relaxed">
          To build a future where emotional wellbeing, positive
          relationships, and lifelong learning are valued as essential
          foundations for personal, educational, and community development.
        </p>
      </div>

    </div>

    {/* What We Believe */}

    <div className="bg-gray-50 p-10 rounded-2xl text-center">
      <h3 className="text-3xl font-bold text-blue-900 mb-6">
        What We Believe
      </h3>

      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        At NalamMind, we believe that wellbeing is not an isolated goal—
        it is an integral part of effective learning, healthy relationships,
        and sustainable success. By supporting families, empowering students,
        strengthening educators, and partnering with schools, we strive to
        create environments where every individual can thrive.
      </p>
    </div>

  </div>
</section>
{/* Parenting Assessment */}
<section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-teal-50">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-blue-900 mb-4">
      Free Parenting Wellness Check™
    </h2>

    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
      Discover your parenting strengths and receive personalized guidance in just 5 minutes.
    </p>

    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
      <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>

      <h3 className="text-2xl font-bold text-blue-900 mb-4">
        10 Questions • Instant Results • Personalized Parenting Tips

      </h3>
      <a
        href="/parenting-check"
        className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold inline-block"
      >
        Start Free Assessment
      </a>
      <p className="mt-4 text-xs text-gray-500">
  No Registration Required
</p>
    </div>

  </div>
</section>
  {/* Program */}
  {/* Parent Wellbeing Framework */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-6 text-center">
      Parent Wellbeing Framework
    </h2>
      
<p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
  A practical framework designed to help parents build emotional resilience,
  strengthen relationships, improve communication, and create a positive
  environment that supports children's wellbeing and growth.
</p>
<div className="grid md:grid-cols-4 gap-4 mt-10">
  <div className="bg-white p-5 rounded-lg shadow">
    <h3 className="font-bold">Self-Awareness</h3>
    <p>Understanding emotions, triggers, and parenting patterns.</p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow">
    <h3 className="font-bold">Emotional Regulation</h3>
    <p>Managing stress, anxiety, and everyday parenting challenges.</p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow">
    <h3 className="font-bold">Parent-Child Connection</h3>
    <p>Building trust, communication, and meaningful relationships.</p>
  </div>

  <div className="bg-white p-5 rounded-lg shadow">
    <h3 className="font-bold">Positive Growth</h3>
    <p>Creating a supportive and emotionally healthy family culture.</p>
  </div>

</div>
    </div>
  </section>


{/* Testimonials */}
<section id="testimonials" className="scroll-mt-20 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">
      What People Say
    </h2>

    <p className="text-lg text-gray-600 mb-12">
      Real experiences from parents, educators and schools.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-gray-50 p-8 rounded-xl shadow">
        <p className="italic text-gray-700 mb-4">
          "The Parent Emotional Reset helped me understand my child better and improve communication at home."
        </p>
        <h4 className="font-bold text-blue-900">
          — Parent Participant
        </h4>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow">
        <p className="italic text-gray-700 mb-4">
          "Our students became more confident and emotionally aware after participating in the wellbeing sessions."
        </p>
        <h4 className="font-bold text-blue-900">
          — School Counselor
        </h4>
      </div>

      <div className="bg-gray-50 p-8 rounded-xl shadow">
        <p className="italic text-gray-700 mb-4">
          "Practical, engaging and highly relevant for teachers and school leaders."
        </p>
        <h4 className="font-bold text-blue-900">
          — School Principal
        </h4>
      </div>

    </div>
  </div>
</section>
  {/* Services */}
  <section id="who-we-serve" className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
      Who We Serve
    </h2>

    <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
      Supporting every stakeholder in the journey of learning,
      wellbeing, and growth.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Parents */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Parents
        </h3>
        <p className="text-gray-600">
          Guidance for emotional wellbeing, positive parenting,
          and stronger family relationships.
        </p>
      </div>

      {/* Students */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-5xl mb-4">🎓</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Students
        </h3>
        <p className="text-gray-600">
          Support for emotional resilience, confidence,
          mindset, and life skills development.
        </p>
      </div>

      {/* Educators */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-5xl mb-4">👩‍🏫</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Educators
        </h3>
        <p className="text-gray-600">
          Resources and strategies to promote student wellbeing,
          engagement, and classroom connection.
        </p>
      </div>

      {/* Schools */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-5xl mb-4">🏫</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Schools
        </h3>
        <p className="text-gray-600">
          Wellbeing programs, capacity building, and AI-powered
          support for holistic school development.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
      How We Use AI
    </h2>

    <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 text-lg">
      At NalamMind, AI is used as a supportive tool to enhance access to
      information, guidance, and wellbeing resources—not as a replacement
      for human connection, professional judgment, or personalized support.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
        <div className="text-4xl mb-4">🧠</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Personalized Insights
        </h3>
        <p className="text-gray-700">
          AI helps generate meaningful insights from wellbeing assessments
          and self-reflection tools.
        </p>
      </div>

      <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Resource Discovery
        </h3>
        <p className="text-gray-700">
          AI assists users in finding relevant wellbeing resources,
          learning materials, and guidance more efficiently.
        </p>
      </div>

      <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
        <div className="text-4xl mb-4">🤝</div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Human-Centred Support
        </h3>
        <p className="text-gray-700">
          Professional guidance, empathy, and decision-making remain
          human-led. AI serves as a supporting technology, not a substitute
          for personal support.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Contact */}
<section id="contact" className="scroll-mt-20 py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
      Contact Us
    </h2>

    {/* Guidance Box */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-blue-900 text-center mb-3">
        💬Need Someone to Listen you?
      </h3>

      <p className="text-gray-700 text-center">
              Facing challenges in parenting, education, emotional wellbeing, or daily life?
      Share your concern below and receive personalized support via Email or WhatsApp.
        <br />
        Submit your question below and receive personalized support via
        <strong> Email</strong> or <strong>WhatsApp</strong>.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Contact Details */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Get In Touch
        </h3>

        <p className="text-lg mb-4">
          📧 nalam.mind@gmail.com
        </p>

        <p className="text-lg mb-4">
          📱 +91 9361565208
        </p>

        <p className="text-lg">
          📍 Coimbatore, Tamil Nadu, India
        </p>
      </div>
{/* Contact Form */}
<form
  onSubmit={handleSubmit}
  className="bg-white p-8 rounded-xl shadow-lg"
>
  {/* Email Subject */}
  

  {/* Redirect After Submission */}
 

  {/* Disable Captcha (Optional) */}
 

  <input
  type="text"
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
  placeholder="Your Name"
  required
  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
/>
<input
  type="email"
  value={form.email}
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
  placeholder="Your Email"
  required
  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
/>

  <input
  type="tel"
  value={form.phone}
  onChange={(e) =>
    setForm({ ...form, phone: e.target.value })
  }
  placeholder="Phone Number"
  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
/>

  <textarea
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
  placeholder="Please describe your question or concern..."
  rows={5}
  required
  className="w-full border border-gray-300 p-3 rounded-lg mb-4"
/>

  <button
    type="submit"
    className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
  >
    Ask Our Experts
  </button>

  <p className="text-sm text-gray-500 text-center mt-4">
    🔒 Your information will remain confidential and will be used only to respond to your enquiry.
  </p>
</form>
    </div>
  </div>
</section>

{/* CTA */}
<section className="bg-blue-900 text-white py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Begin Your Wellbeing Journey Today
  </h2>

  <p className="mb-6">
    Explore our wellbeing programs for parents,
    students, educators, and schools.
  </p>

  <a
    href="https://wa.me/919361565208"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-teal-500 px-8 py-3 rounded-lg font-semibold inline-block hover:bg-teal-600 transition"
  >
    Contact on WhatsApp
  </a>
</section>

{/* Footer */}
<footer className="bg-blue-950 text-white text-center py-8">
  <p className="font-semibold">
    © 2026 NalamMind AI. All Rights Reserved.
  </p>

  <p className="text-gray-300 mt-2">
    Empowering Parents, Students, and Educators through AI and Emotional Wellbeing
  </p>
</footer>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919361565208"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-semibold z-50 transition-all duration-300 hover:scale-110"
>
  💬 WhatsApp
</a>
</main>
);
}
