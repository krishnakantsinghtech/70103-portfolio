import { motion } from "framer-motion";
import { Code, Palette, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description: "Learning HTML, CSS, JavaScript, and React to build modern web applications.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Exploring design principles to create beautiful and intuitive user interfaces.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Developing algorithmic thinking and tackling coding challenges every day.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <h2 className="font-display text-4xl font-light md:text-5xl lg:text-6xl">
            My <span className="text-gradient-sakura">Journey</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card group p-8 transition-all duration-500 hover:glow-sakura"
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 transition-colors duration-300 group-hover:bg-primary/20">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-medium text-foreground">
                {skill.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Every expert was once a beginner. I believe in the power of consistent learning
            and the beauty of creating something from nothing. Join me as I transform
            curiosity into capability, one project at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
