import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { toast } from 'sonner';

const TechPDFGenerator = () => {
  const generateTechPDF = () => {
    try {
      const doc = new jsPDF();
      
      // Title
      doc.setFontSize(24);
      doc.setFont(undefined, 'bold');
      doc.text('Portfolio Technology Stack', 20, 30);
      
      // Subtitle
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      doc.text('Modern web development technologies used in this portfolio', 20, 45);
      
      let yPosition = 65;
      const lineHeight = 8;
      const sectionSpacing = 15;
      
      // Core Framework & Build Tools
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Core Framework & Build Tools', 20, yPosition);
      yPosition += lineHeight + 5;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      const technologies = [
        {
          name: 'React (v18.3.1)',
          description: 'Frontend library for building interactive user interfaces with component-based architecture'
        },
        {
          name: 'TypeScript',
          description: 'Adds static type checking to JavaScript for better code reliability and developer experience'
        },
        {
          name: 'Vite',
          description: 'Fast build tool and development server with hot module replacement'
        }
      ];
      
      technologies.forEach(tech => {
        doc.setFont(undefined, 'bold');
        doc.text(`• ${tech.name}`, 25, yPosition);
        yPosition += lineHeight - 2;
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(tech.description, 160);
        doc.text(splitText, 30, yPosition);
        yPosition += splitText.length * (lineHeight - 2) + 3;
      });
      
      yPosition += sectionSpacing;
      
      // Styling & Design System
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Styling & Design System', 20, yPosition);
      yPosition += lineHeight + 5;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      const stylingTech = [
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development with consistent design tokens'
        },
        {
          name: 'shadcn/ui',
          description: 'Pre-built, customizable UI components built on Radix UI primitives'
        },
        {
          name: 'CSS Custom Properties',
          description: 'Used in index.css for semantic design tokens (colors, gradients, animations)'
        }
      ];
      
      stylingTech.forEach(tech => {
        doc.setFont(undefined, 'bold');
        doc.text(`• ${tech.name}`, 25, yPosition);
        yPosition += lineHeight - 2;
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(tech.description, 160);
        doc.text(splitText, 30, yPosition);
        yPosition += splitText.length * (lineHeight - 2) + 3;
      });
      
      yPosition += sectionSpacing;
      
      // Animation & 3D Graphics
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Animation & 3D Graphics', 20, yPosition);
      yPosition += lineHeight + 5;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      const animationTech = [
        {
          name: 'Framer Motion (v12.23.3)',
          description: 'Production-ready motion library for React animations and page transitions'
        },
        {
          name: 'Three.js (v0.160.1)',
          description: '3D graphics library for WebGL rendering'
        },
        {
          name: '@react-three/fiber & @react-three/drei',
          description: 'React renderers for Three.js with helpful utilities'
        }
      ];
      
      animationTech.forEach(tech => {
        doc.setFont(undefined, 'bold');
        doc.text(`• ${tech.name}`, 25, yPosition);
        yPosition += lineHeight - 2;
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(tech.description, 160);
        doc.text(splitText, 30, yPosition);
        yPosition += splitText.length * (lineHeight - 2) + 3;
      });
      
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      } else {
        yPosition += sectionSpacing;
      }
      
      // Additional Features
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Additional Features', 20, yPosition);
      yPosition += lineHeight + 5;
      
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      const additionalTech = [
        {
          name: 'React Router DOM (v6.26.2)',
          description: 'Client-side routing for single-page application navigation'
        },
        {
          name: 'Lucide React',
          description: 'Beautiful, customizable SVG icons as React components'
        },
        {
          name: 'Particles.js',
          description: 'Interactive particle background effects'
        },
        {
          name: 'React Intersection Observer',
          description: 'Scroll-based animations and section detection'
        },
        {
          name: 'Sonner',
          description: 'Toast notifications for user feedback'
        }
      ];
      
      additionalTech.forEach(tech => {
        doc.setFont(undefined, 'bold');
        doc.text(`• ${tech.name}`, 25, yPosition);
        yPosition += lineHeight - 2;
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(tech.description, 160);
        doc.text(splitText, 30, yPosition);
        yPosition += splitText.length * (lineHeight - 2) + 3;
      });
      
      // Footer
      doc.setFontSize(8);
      doc.setFont(undefined, 'italic');
      doc.text('Generated from Portfolio Project', 20, 280);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 285);
      
      // Save the PDF
      doc.save('Portfolio_Technology_Stack.pdf');
      toast.success('PDF generated successfully!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF');
    }
  };

  return (
    <Button
      onClick={generateTechPDF}
      variant="outline"
      size="lg"
      className="group glass border-primary/30 hover:border-primary hover:neon-glow transition-smooth"
    >
      <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" />
      Generate Tech Stack PDF
    </Button>
  );
};

export default TechPDFGenerator;