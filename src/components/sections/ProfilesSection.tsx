import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Trophy, Star, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfilesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'johndoe_dev',
      logo: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
      stats: {
        solved: '450+',
        ranking: 'Top 15%',
        streak: '45 days',
      },
      description: 'Focused on algorithmic problem solving and data structures',
      color: '#FFA116',
      link: 'https://leetcode.com/johndoe_dev',
    },
    {
      platform: 'HackerRank',
      username: 'john_doe',
      logo: 'https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg',
      stats: {
        stars: '5 ⭐',
        ranking: 'Gold Badge',
        points: '2500+',
      },
      description: 'Strong performance in algorithms and problem solving domains',
      color: '#00EA64',
      link: 'https://hackerrank.com/john_doe',
    },
    {
      platform: 'Codeforces',
      username: 'johndoe123',
      logo: 'https://sta.codeforces.com/s/0/favicon-16x16.png',
      stats: {
        rating: '1450',
        rank: 'Specialist',
        contests: '25+',
      },
      description: 'Competitive programming enthusiast with focus on contests',
      color: '#1976D2',
      link: 'https://codeforces.com/profile/johndoe123',
    },
    {
      platform: 'CodeChef',
      username: 'john_chef',
      logo: 'https://cdn.codechef.com/images/cc-logo.svg',
      stats: {
        rating: '1680',
        stars: '3 ⭐',
        rank: '2 Star',
      },
      description: 'Regular participant in monthly contests and challenges',
      color: '#5B4638',
      link: 'https://codechef.com/users/john_chef',
    },
    {
      platform: 'GitHub',
      username: 'johndoe-dev',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      stats: {
        repos: '50+',
        stars: '200+',
        contributions: '500+',
      },
      description: 'Open source contributor with projects in React and JavaScript',
      color: '#171515',
      link: 'https://github.com/johndoe-dev',
    },
    {
      platform: 'GeeksforGeeks',
      username: 'johndoe_gfg',
      logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
      stats: {
        score: '850+',
        articles: '15',
        rank: 'Top 20%',
      },
      description: 'Active contributor to the GeeksforGeeks community',
      color: '#0F9D58',
      link: 'https://auth.geeksforgeeks.org/user/johndoe_gfg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="profiles" className="min-h-screen py-20 bg-gradient-to-b from-muted/20 to-background">
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
              Coding Profiles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey across various coding platforms and achievements in competitive programming
            </p>
          </motion.div>

          {/* Overall Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: 'Problems Solved', value: '1200+', icon: Target },
              { label: 'Contest Participated', value: '75+', icon: Trophy },
              { label: 'Global Ranking', value: 'Top 15%', icon: Star },
              { label: 'Coding Streak', value: '45 Days', icon: Trophy },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center hover:neon-glow transition-smooth"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card group cursor-pointer hover:neon-glow transition-smooth"
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: profile.color }}
                  >
                    <img 
                      src={profile.logo} 
                      alt={profile.platform}
                      className="w-8 h-8 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{profile.platform}</h3>
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm capitalize text-muted-foreground">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="font-semibold" style={{ color: profile.color }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full group/btn glass border-primary/30 hover:border-primary hover:neon-glow"
                >
                  <a href={profile.link} target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Let's Code Together!</h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on coding challenges or competitive programming? 
                Let's connect and solve problems together!
              </p>
              <Button 
                size="lg"
                className="glass hover:neon-glow transition-smooth"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Challenge Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesSection;