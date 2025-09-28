import React, { useState } from 'react';
import FeatureModal from './FeatureModal';
import './Features.css';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: '🐻🌲',
      title: 'Stanford x Berkeley',
      description: 'Imagine you"re average wattpad fanfic, but they"re both shameless bay area cs startup grinder linkedin warriors',
      details: [
        'Gesture-based input',
        'Quick task templates',
        'Priority setting'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=Task+Adding+Interface+Demo'
    },
    {
      icon: '🟪🦅',
      title: 'Northwesten x UChicago',
      description: 'what if we went to illinois together.... mental illinois.....',
      details: [
        'AI conversation analysis',
        'Voice task creation',
        'Context-aware suggestions'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=AI+Voice+Integration+Demo'
    },
    {
      icon: '🪿',
      title: 'UToronto x Waterloo',
      description: 'Location-aware reminders that appear when you\'re in the right place. See grocery lists at the store, home tasks when you arrive.',
      details: [
        'GPS and spatial tracking',
        'Context-aware filtering',
        'Proximity-based display'
      ],
      image: 'https://via.placeholder.com/600x400/6478f5/ffffff?text=Spatial+Detection+Demo'
    }
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">key features</h2>
          <p className="section-description">
            Built for shipping presitious universities without Lens Studio
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card clickable"
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="feature-icon">
                <span className="icon">{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-cta">
                  <span className="click-hint">See demo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta text-center">
          <h3>explore more yuri and yaoi</h3>
          <p>check out these fanfics that fiona found on reddit in 10th grade for more information</p>
          <div className="cta-buttons">
            <a href="https://www.reddit.com/r/ApplyingToCollege/comments/s7iaur/berkeley_x_stanford_gay_fanfic_enemies_to_lovers/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Stanford x Berkeley Enemies to Lovers
            </a>
            <a href="https://www.reddit.com/r/ApplyingToCollege/comments/rwifwj/alpha_league_an_ivy_boys_fanfic/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              the Ivy Boys
            </a>
          </div>
        </div>
      </div>
      
      <FeatureModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        feature={selectedFeature}
      />
    </section>
  );
};

export default Features;

