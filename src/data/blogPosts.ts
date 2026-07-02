import type { BlogPost, BlogLanguage } from './blogTypes';
import howMuchDoesCorporateYogaCost from './posts/how-much-does-corporate-yoga-cost';
import chairYogaAtYourDesk from './posts/chair-yoga-at-your-desk';
import deskYoga5MinuteRoutine from './posts/desk-yoga-5-minute-routine';
import preventBurnoutDistributedTeam from './posts/prevent-burnout-distributed-team';
import breathingExercisesForWorkStress from './posts/breathing-exercises-for-work-stress';
import doWorkplaceWellnessAppsWork from './posts/do-workplace-wellness-apps-work';
import fiveMinuteDeskMeditation from './posts/5-minute-desk-meditation';
import neckAndShoulderStretchesDeskWorkers from './posts/neck-and-shoulder-stretches-desk-workers';
import corporateWellnessIdeasRemoteTeams from './posts/corporate-wellness-ideas-remote-teams';

export type { BlogPost, BlogLanguage, BlogContentBlock } from './blogTypes';

// The cost guide leads (featured on the hub); the rest follow in publishing order.
export const blogPosts: BlogPost[] = [
  howMuchDoesCorporateYogaCost,
  chairYogaAtYourDesk,
  deskYoga5MinuteRoutine,
  preventBurnoutDistributedTeam,
  breathingExercisesForWorkStress,
  doWorkplaceWellnessAppsWork,
  fiveMinuteDeskMeditation,
  neckAndShoulderStretchesDeskWorkers,
  corporateWellnessIdeasRemoteTeams,
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
