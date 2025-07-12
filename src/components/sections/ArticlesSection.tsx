import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticlesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const articles = [
    {
      title: 'Building Interactive UI with Framer Motion',
      excerpt: 'Learn how to create stunning animations and micro-interactions that enhance user experience in React applications.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      link: '#',
      featured: true,
    },
    {
      title: 'Three.js Fundamentals: Creating 3D Web Experiences',
      excerpt: 'Dive into the world of 3D graphics on the web with Three.js. From basic concepts to advanced techniques.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Three.js',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500&h=300&fit=crop',
      link: '#',
      featured: false,
    },
    {
      title: 'Modern CSS: Grid and Flexbox Mastery',
      excerpt: 'Master the art of layout with CSS Grid and Flexbox. Build responsive designs that work on every device.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      link: '#',
      featured: false,
    },
    {
      title: 'TypeScript Best Practices for React Developers',
      excerpt: 'Enhance your React applications with TypeScript. Learn patterns and practices for type-safe development.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      link: '#',
      featured: false,
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="articles" className="min-h-screen py-20">
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
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, design, and technology
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div variants={itemVariants} className="mb-16">
            {articles.filter(article => article.featured).map((article) => (
              <motion.article
                key={article.title}
                whileHover={{ scale: 1.02 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="self-start group/btn glass border-primary/30 hover:border-primary hover:neon-glow"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Article Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card overflow-hidden group cursor-pointer hover:neon-glow transition-smooth"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto"
                    >
                      Read More
                    </Button>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;