import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';
import profilePhoto from '../../assets/profile-photo.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'XYZ University',
      year: '2020-2024',
      grade: 'CGPA: 8.5/10',
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'Science (PCM)',
      institution: 'ABC Higher Secondary School',
      year: '2018-2020',
      grade: 'Percentage: 92%',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20">
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what I'm passionate about
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Personal Info</h3>
                </div>

                {/* Profile Photo */}
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="relative">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                </motion.div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>22 years old</span>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed">
                  I'm a recent graduate passionate about frontend development and eager to create interactive, 
                  user-friendly web applications. I enjoy learning new technologies and building projects that solve real-world problems.
                </p>

                <p className="mt-4 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, working on personal projects, 
                  or playing video games. I believe in continuous learning and am excited to grow my skills in the tech industry.
                </p>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>

                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      className="relative pl-8 border-l-2 border-primary/30"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
                      
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-primary">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground">{edu.field}</p>
                        <p className="text-sm text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary">{edu.year}</span>
                          <span className="text-sm text-muted-foreground">{edu.grade}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Projects Built', value: '8+' },
              { label: 'Technologies Used', value: '12+' },
              { label: 'Learning Hours', value: '500+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center hover:neon-glow transition-smooth"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;