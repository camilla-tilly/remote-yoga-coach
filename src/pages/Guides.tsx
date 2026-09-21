import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import { PageHero, PageSection, ClosingCTA, PillLink, LinkRows } from '@/components/PageKit';
import { blogPosts } from '@/data/blogPosts';

const guides = [
  {
    to: '/guides/cost-of-employee-burnout',
    title: 'What employee burnout costs, and the ROI of fixing it',
    description:
      'The real cost of burnout to an employer, why most of it is invisible, the documented return on wellbeing spend, and how to build the case for your budget-holder.',
  },
  {
    to: '/guides/remote-work-burnout',
    title: 'Remote work burnout: signs, causes and prevention',
    description:
      'Why distributed teams burn out quietly, the warning signs you can spot from a distance, what it costs, and prevention that works.',
  },
  {
    to: '/guides/mindfulness-at-work',
    title: 'Mindfulness at work: does it work for teams?',
    description:
      'What workplace mindfulness really is, what the evidence shows, and how to run meditation and breathing as a regular team class instead of leaving it to an app.',
  },
  {
    to: '/guides/desk-yoga',
    title: 'Desk yoga and chair yoga at work',
    description:
      'Why office bodies ache, the seated movements that help, a five-minute routine between calls, and how to make it a regular habit for a whole team.',
  },
];

const latestPosts = [...blogPosts].sort((x, y) => y.publishDate.localeCompare(x.publishDate)).slice(0, 4);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Guides for HR and people leaders',
      description:
        'Plain-English guides on distributed-team wellbeing: the cost of burnout and its ROI, remote burnout prevention, workplace mindfulness, and desk yoga.',
      url: 'https://remoteyogacoach.com/guides',
      hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.title, url: `https://remoteyogacoach.com${g.to}` })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://remoteyogacoach.com/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://remoteyogacoach.com/guides' },
      ],
    },
  ],
};

const Guides = () => {

  return (
    <div className="min-h-screen bg-offwhite relative overflow-x-hidden">
      <SEO
        title="Wellbeing Guides for HR and People Leaders | Remote Yoga Coach"
        description="Plain-English guides on distributed-team wellbeing: the cost of burnout and its ROI, remote burnout prevention, workplace mindfulness, and desk yoga for office workers."
        canonical="https://remoteyogacoach.com/guides"
        ogImage="https://remoteyogacoach.com/og/guides.png?v=4"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero title="Guides on team wellbeing">
          <p>
            Plain-English guides for the person who has to sell this internally, from the hard cost of burnout to
            whether workplace mindfulness actually works. Written for HR, people leaders and anyone building the
            business case.
          </p>
        </PageHero>

        <PageSection heading="Guides">
          <LinkRows items={guides.map((g) => ({ to: g.to, title: g.title, text: g.description }))} />
        </PageSection>

        <PageSection heading="From the blog">
          <LinkRows items={latestPosts.map((p) => ({ to: `/blog/${p.slug}`, title: p.title, text: p.excerpt }))} small />
          <p className="mt-6">
            <Link to="/blog" className="text-clay underline underline-offset-4 hover:text-clayDark">
              All blog posts
            </Link>
          </p>
        </PageSection>

        <PageSection heading="More answers">
          <LinkRows
            small
            items={[
              { to: '/compare', title: 'Live sessions, wellbeing apps and EAPs compared', text: 'How the three options differ, and how many people actually use each one.' },
              { to: '/faq', title: 'Frequently asked questions', text: 'Cameras, recordings, time zones, pricing and how to get started.' },
              { to: '/pricing', title: 'Pricing', text: 'The three monthly plans and the pilot session.' },
            ]}
          />
        </PageSection>

        <ClosingCTA
          heading="Try a live class with your team"
          actions={<PillLink to="/demo" variant="light">Book a pilot</PillLink>}
        >
          <p>If you would like to try it, start with a single pilot session.</p>
        </ClosingCTA>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Guides;
