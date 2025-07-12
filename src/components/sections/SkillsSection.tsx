import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Settings } from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'TypeScript', level: 80, color: '#3178C6' },
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3', level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
      ],
    },
    {
      title: 'Design & Animation',
      icon: Palette,
      skills: [
        { name: 'Framer Motion', level: 75, color: '#0055FF' },
        { name: 'Three.js', level: 70, color: '#000000' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'Adobe XD', level: 70, color: '#FF61F6' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      skills: [
        { name: 'Git', level: 85, color: '#F05032' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Vite', level: 80, color: '#646CFF' },
        { name: 'RESTful APIs', level: 80, color: '#FF6B6B' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full relative"
            style={{ backgroundColor: skill.color }}
          >
            <div 
              className="absolute inset-0 bg-white/20 animate-pulse-glow"
              style={{ backgroundColor: `${skill.color}40` }}
            />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const CircularSkill = ({ skill, index }: { skill: any; index: number }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center space-y-2 glass-card p-4 hover:neon-glow transition-smooth"
      >
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="45"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-muted"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="45"
              stroke={skill.color}
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold">{skill.level}%</span>
          </div>
        </div>
        <span className="text-sm font-medium text-center">{skill.name}</span>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                {/* Frontend Technologies - Bar Chart */}
                {categoryIndex === 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                )}

                {/* Design & Animation - Circular Progress */}
                {categoryIndex === 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {category.skills.map((skill, index) => (
                      <CircularSkill key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                )}

                {/* Tools & Others - Mixed Layout */}
                {categoryIndex === 2 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="glass rounded-xl p-4 text-center hover:neon-glow transition-smooth"
                      >
                        <div 
                          className="w-12 h-12 rounded-full mx-auto mb-3"
                          style={{ backgroundColor: skill.color }}
                        />
                        <h4 className="font-medium">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{skill.level}%</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;