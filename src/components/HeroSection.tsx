import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            Welcome to my world
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl font-light leading-tight tracking-wide md:text-7xl lg:text-8xl"
          >
            <span className="text-foreground">I'm </span>
            <span className="text-gradient-sakura">Learning</span>
            <br />
            <span className="text-foreground">to </span>
            <span className="text-gradient-moon">Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mt-8 max-w-md font-body text-base text-muted-foreground md:text-lg"
          >
            A developer in progress, crafting digital experiences one line at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#about"
              className="glass-card glow-sakura px-8 py-3 font-body text-sm uppercase tracking-widest text-foreground transition-all duration-300 hover:scale-105"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="border border-border/50 bg-transparent px-8 py-3 font-body text-sm uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
