import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const CSSDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center" 
            alt="CSS Demo"
          />
        </div>
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <h1 className="hero-title">CSS Customization Demo</h1>
          <p className="hero-subtitle">
            All styles are controlled from a single CSS file: src/styles/globals.css
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large">Primary Button</Button>
            <Button variant="secondary" size="large">Secondary Button</Button>
            <Button variant="outline" size="large">Outline Button</Button>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Component Examples</h2>
            <p className="text-lg text-gray-600">
              These components use CSS classes from globals.css
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Button Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Buttons</h3>
              <div className="space-y-3">
                <Button fullWidth>Primary Button</Button>
                <Button variant="secondary" fullWidth>Secondary Button</Button>
                <Button variant="outline" fullWidth>Outline Button</Button>
                <Button variant="ghost" fullWidth>Ghost Button</Button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <Button size="small">Small</Button>
                  <Button>Medium</Button>
                  <Button size="large">Large</Button>
                </div>
              </div>
            </Card>

            {/* Card Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cards</h3>
              <div className="space-y-4">
                <Card padding="small">
                  <p className="text-sm">Small padding card</p>
                </Card>
                <Card padding="medium">
                  <p className="text-sm">Medium padding card</p>
                </Card>
                <Card padding="large">
                  <p className="text-sm">Large padding card</p>
                </Card>
                <Card padding="none" className="border-2 border-primary">
                  <div className="p-3">
                    <p className="text-sm">No padding card with custom border</p>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Form Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Form Elements</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Input
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter text..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Input
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Textarea
                  </label>
                  <textarea
                    className="input"
                    rows={3}
                    placeholder="Enter message..."
                  />
                </div>
              </div>
            </Card>

            {/* Badge Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Badges</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-primary">Primary</span>
                  <span className="badge badge-secondary">Secondary</span>
                  <span className="badge badge-success">Success</span>
                  <span className="badge badge-warning">Warning</span>
                  <span className="badge badge-error">Error</span>
                </div>
              </div>
            </Card>

            {/* Alert Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alerts</h3>
              <div className="space-y-3">
                <div className="alert alert-success">
                  <strong>Success!</strong> Your action was completed.
                </div>
                <div className="alert alert-warning">
                  <strong>Warning!</strong> Please check your input.
                </div>
                <div className="alert alert-error">
                  <strong>Error!</strong> Something went wrong.
                </div>
                <div className="alert alert-info">
                  <strong>Info!</strong> Here's some information.
                </div>
              </div>
            </Card>

            {/* Typography Examples */}
            <Card padding="large" hover>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography</h3>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
                <h2 className="text-3xl font-bold text-gray-900">Heading 2</h2>
                <h3 className="text-2xl font-bold text-gray-900">Heading 3</h3>
                <p className="text-base text-gray-600">
                  This is a paragraph with regular text. All typography styles are controlled from the CSS file.
                </p>
                <p className="text-sm text-gray-500">
                  Small text example with muted color.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-primary font-medium">Primary Color</span>
                  <span className="text-secondary font-medium">Secondary Color</span>
                  <span className="text-success font-medium">Success Color</span>
                  <span className="text-warning font-medium">Warning Color</span>
                  <span className="text-error font-medium">Error Color</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Customization Instructions */}
          <div className="mt-16">
            <Card padding="large" className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 How to Customize</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To change the appearance of ALL components above, simply edit the CSS custom properties in:
                </p>
                <code className="bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                  src/styles/globals.css
                </code>
                <p className="text-sm text-gray-500 mt-4">
                  Change colors, fonts, spacing, shadows, and more from one central location!
                </p>
                <div className="mt-6">
                  <Button size="large" className="bg-gradient-to-r from-green-500 to-blue-500">
                    View CSS Guide
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSSDemo;
