import { useState, useEffect } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/Accordion';
import { Alert } from './components/Alert';
import DesignTokens from './pages/DesignTokens';

type PageView = 'components' | 'tokens';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('components');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8.5C13.5 11.5 10.5 14 7 14C3.5 14 1 11.5 1 8C1 4.5 3.5 2 7 2C7.5 2 8 2 8.5 2.5C7 3 6 4.5 6 6.5C6 9 7.5 11 10 11C11.5 11 13 10 13.5 8.5C13.5 8.5 14 8.5 14 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 1.5V2.5M8 13.5V14.5M14.5 8H13.5M2.5 8H1.5M12.5 3.5L11.8 4.2M4.2 11.8L3.5 12.5M12.5 12.5L11.8 11.8M4.2 4.2L3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-background dark:bg-[#181818] py-12 px-4 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground dark:text-[#fcfaf8] mb-2">
              AfterDS 2.0 Component Library
            </h1>
            <p className="text-muted-foreground dark:text-[#b3b3b3]">
              Fully-featured components built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
          <Button
            variant="outline"
            size="md"
            iconBefore={isDarkMode ? <SunIcon /> : <MoonIcon />}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 flex gap-2 border-b border-border dark:border-[#353535]">
          <button
            onClick={() => setCurrentPage('components')}
            className={`px-6 py-3 text-base font-medium transition-colors relative ${
              currentPage === 'components'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground dark:text-[#b3b3b3] hover:text-foreground dark:hover:text-[#fcfaf8]'
            }`}
          >
            Components
          </button>
          <button
            onClick={() => setCurrentPage('tokens')}
            className={`px-6 py-3 text-base font-medium transition-colors relative ${
              currentPage === 'tokens'
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground dark:text-[#b3b3b3] hover:text-foreground dark:hover:text-[#fcfaf8]'
            }`}
          >
            Design Tokens
          </button>
        </div>

        {/* Content */}
        {currentPage === 'tokens' ? (
          <DesignTokens isDarkMode={isDarkMode} />
        ) : (
          <>
            <div className="space-y-8 bg-white dark:bg-[#1f1f1f] p-8 rounded-lg shadow-sm transition-colors duration-200">
              <section>
            <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-6">Alert Component</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Default Alert</h3>
                <Alert
                  variant="default"
                  title="Heads up!"
                  description="You can add components to your app using the cli."
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Destructive Alert</h3>
                <Alert
                  variant="destructive"
                  title="Error"
                  description="Your session has expired. Please log in again."
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Various Use Cases</h3>
                <div className="space-y-3">
                  <Alert
                    variant="default"
                    title="New Feature"
                    description="Check out our new dashboard for better insights."
                  />
                  <Alert
                    variant="destructive"
                    description="Something went wrong. Please try again."
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border dark:border-[#353535] my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-6">Button Component</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Primary Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
                    Button
                  </Button>
                  <Button variant="primary" size="sm" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
                    Button
                  </Button>
                  <Button variant="primary" size="md" destructive iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
                    Delete
                  </Button>
                  <Button variant="primary" size="md" isLoading>
                    Loading
                  </Button>
                  <Button variant="primary" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Secondary & Outline Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="md" iconBefore={<PlusIcon />}>
                    Secondary
                  </Button>
                  <Button variant="outline" size="md" iconBefore={<PlusIcon />}>
                    Outline
                  </Button>
                  <Button variant="ghost" size="md" iconBefore={<PlusIcon />}>
                    Ghost
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Link Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="link" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
                    Link
                  </Button>
                  <Button variant="link-secondary" size="md" iconBefore={<PlusIcon />} iconAfter={<PlusIcon />}>
                    Link Secondary
                  </Button>
                  <Button variant="link" size="md" destructive iconBefore={<PlusIcon />}>
                    Delete Link
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border dark:border-[#353535] my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-6">Badge Component</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Rounded Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Badge</Badge>
                  <Badge variant="secondary">Badge</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="destructive">Badge</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Square Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default" rounded={false}>Badge</Badge>
                  <Badge variant="secondary" rounded={false}>Badge</Badge>
                  <Badge variant="outline" rounded={false}>Badge</Badge>
                  <Badge variant="destructive" rounded={false}>Badge</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Status Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">New</Badge>
                  <Badge variant="secondary">Beta</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Draft</Badge>
                  <Badge variant="default">In Progress</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">With Numbers</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">1</Badge>
                  <Badge variant="secondary">12</Badge>
                  <Badge variant="destructive">99+</Badge>
                  <Badge variant="outline">5</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Inline Usage</h3>
                <div className="space-y-3">
                  <p className="text-base dark:text-[#e0e0e0]">
                    This is a new feature <Badge variant="default">New</Badge>
                  </p>
                  <p className="text-base dark:text-[#e0e0e0]">
                    Still in development <Badge variant="secondary">Beta</Badge>
                  </p>
                  <p className="text-base dark:text-[#e0e0e0]">
                    You have <Badge variant="destructive">3</Badge> errors
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border dark:border-[#353535] my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-6">Accordion Component</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Single Accordion (only one item open)</h3>
                <Accordion type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the design system.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default with smooth transitions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-3">Multiple Accordion (multiple items open)</h3>
                <Accordion type="multiple">
                  <AccordionItem value="q1">
                    <AccordionTrigger>What is AfterDS?</AccordionTrigger>
                    <AccordionContent>
                      AfterDS is a comprehensive design system built with React, TypeScript, and Tailwind CSS.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q2">
                    <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
                    <AccordionContent>
                      Yes! All components use Tailwind CSS classes for easy customization.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          <div className="border-t border-border dark:border-[#353535] my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-foreground dark:text-[#fcfaf8] mb-6">Input Component</h2>
            <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-4">Examples</h3>
            <div className="space-y-6">
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="We'll never share your email with anyone else."
              />

              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                isRequired
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText="Must be at least 8 characters"
              />

              <Input
                label="Phone Number"
                placeholder="Optional phone number"
                type="tel"
                isOptional
                helperText="We'll use this for account recovery"
              />

              <Input
                label="Email with Error"
                placeholder="user@example"
                type="email"
                error="Please enter a valid email address"
              />

              <Input
                label="Username"
                placeholder="Choose a username"
                success="This username is available!"
              />

              <Input
                label="Disabled Input"
                placeholder="This field is disabled"
                disabled
                helperText="This field cannot be edited"
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold dark:text-[#fcfaf8] mb-4">States Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Default" placeholder="Default state" />
              <Input label="Hover" placeholder="Hover over me" />
              <Input label="Focus" placeholder="Click me" autoFocus />
              <Input label="Error" placeholder="Error state" error="Error message" />
              <Input label="Success" placeholder="Success state" success="Success message" />
              <Input label="Disabled" placeholder="Disabled" disabled />
            </div>
          </section>
        </div>

            <div className="mt-8 p-6 bg-white dark:bg-[#1f1f1f] rounded-lg shadow-sm transition-colors duration-200">
              <h2 className="text-xl font-semibold dark:text-[#fcfaf8] mb-3">Getting Started</h2>
              <div className="space-y-3 text-sm dark:text-[#e0e0e0]">
                <div>
                  <h3 className="font-medium dark:text-[#fcfaf8] mb-1">Install dependencies:</h3>
                  <code className="block bg-gray-100 dark:bg-[#2a2a2a] dark:text-[#fcfaf8] p-2 rounded">npm install</code>
                </div>
                <div>
                  <h3 className="font-medium dark:text-[#fcfaf8] mb-1">Run Storybook:</h3>
                  <code className="block bg-gray-100 dark:bg-[#2a2a2a] dark:text-[#fcfaf8] p-2 rounded">npm run storybook</code>
                </div>
                <div>
                  <h3 className="font-medium dark:text-[#fcfaf8] mb-1">Run dev server:</h3>
                  <code className="block bg-gray-100 dark:bg-[#2a2a2a] dark:text-[#fcfaf8] p-2 rounded">npm run dev</code>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
