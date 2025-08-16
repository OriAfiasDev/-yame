export default function Map() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full p-3 lg:p-12 bg-amber-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.600992314894!2d34.73512702376393!3d31.99883032334656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b30ab114c38f%3A0xa36c328a07c18a8b!2sYa.Me!5e0!3m2!1siw!2sil!4v1753178623166!5m2!1siw!2sil"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 24 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
