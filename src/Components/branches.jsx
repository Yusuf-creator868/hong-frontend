import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      name: "A.Navoiy filiali",
      address: "Toshkent, A.Navoiy",
      phone: "+998 90 123 45 67",
      email: "navoiy@hongkongacademy.uz",
      students: "200+",
    },
    {
      name: "Xalqlar Do‘stligi filiali",
      address: "Toshkent, Xalqlar Do‘stligi",
      phone: "+998 90 987 65 43",
      email: "xd@hongkongacademy.uz",
      students: "180+",
    },
    {
      name: "Tinchlik filiali",
      address: "Toshkent, Tinchlik",
      phone: "+998 90 456 78 90",
      email: "tinchlik@hongkongacademy.uz",
      students: "150+",
    },
    {
      name: "Chilonzor filiali",
      address: "Toshkent, Chilonzor",
      phone: "+998 90 222 33 44",
      email: "chilonzor@hongkongacademy.uz",
      students: "240+",
    },
    {
      name: "Shahriston filiali",
      address: "Toshkent, Shahriston",
      phone: "+998 90 111 22 33",
      email: "shahriston@hongkongacademy.uz",
      students: "170+",
    },
    {
      name: "Buyuk Ipak Yo‘li filiali",
      address: "Toshkent, Buyuk Ipak Yo‘li",
      phone: "+998 90 777 88 99",
      email: "biy@hongkongacademy.uz",
      students: "210+",
    },
  ];

  return (
    <section
      id="branches"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-red-700 font-semibold uppercase tracking-widest mb-3">
            Our Branches
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Filiallarimiz
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Toshkentning eng qulay joylarida joylashgan zamonaviy filiallarimiz.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-gray-100
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Top Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                  alt={branch.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Students Badge */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-white/90
                    backdrop-blur-md
                    px-4
                    py-2
                    rounded-full
                    shadow-md
                  "
                >
                  <span className="text-red-700 font-bold">
                    {branch.students}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {branch.name}
                </h3>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        min-w-[45px]
                        h-[45px]
                        rounded-xl
                        bg-red-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <MapPin className="text-red-700 w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Location
                      </p>

                      <p className="text-gray-700 font-medium">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        min-w-[45px]
                        h-[45px]
                        rounded-xl
                        bg-red-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Phone className="text-red-700 w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Phone
                      </p>

                      <p className="text-gray-700 font-medium">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        min-w-[45px]
                        h-[45px]
                        rounded-xl
                        bg-red-50
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Mail className="text-red-700 w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1">
                        Email
                      </p>

                      <p className="text-gray-700 font-medium break-all">
                        {branch.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="
                    group/btn
                    mt-8
                    w-full
                    bg-red-700
                    hover:bg-red-800
                    text-white
                    py-4
                    rounded-2xl
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all
                    duration-300
                    hover:shadow-[0_15px_40px_rgba(185,28,28,0.35)]
                  "
                >
                  Bog‘lanish

                  <ArrowRight
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover/btn:translate-x-1
                    "
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}