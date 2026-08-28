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
import corporateMindfulnessSessionsWhatToExpect from './posts/corporate-mindfulness-sessions-what-to-expect';
import teamWellbeingSubscriptionVsWorkshops from './posts/team-wellbeing-subscription-vs-workshops';
import runWellbeingSessionOverTeams from './posts/run-wellbeing-session-over-teams';
import officeYogaForRemoteTeams from './posts/office-yoga-for-remote-teams';
import keepHybridTeamFocused from './posts/keep-hybrid-team-focused';
import howToMeditateAtWork from './posts/how-to-meditate-at-work';
import techNeckExercisesDesk from './posts/tech-neck-exercises-desk';
import buildAStrongRemoteTeam from './posts/build-a-strong-remote-team';
import corporateWellbeingForTechTeams from './posts/corporate-wellbeing-for-tech-teams';
import howToStartACorporateWellbeingProgramme from './posts/how-to-start-a-corporate-wellbeing-programme';
import improveTeamMoraleRemoteTeam from './posts/improve-team-morale-remote-team';
import improveWellbeingProgrammeAttendance from './posts/improve-wellbeing-programme-attendance';

export type { BlogPost, BlogLanguage, BlogContentBlock } from './blogTypes';

// The cost guide leads (featured on the hub); buyer-intent posts follow, then the rest.
export const blogPosts: BlogPost[] = [
  howMuchDoesCorporateYogaCost,
  teamWellbeingSubscriptionVsWorkshops,
  corporateMindfulnessSessionsWhatToExpect,
  runWellbeingSessionOverTeams,
  officeYogaForRemoteTeams,
  keepHybridTeamFocused,
  buildAStrongRemoteTeam,
  corporateWellbeingForTechTeams,
  howToStartACorporateWellbeingProgramme,
  improveWellbeingProgrammeAttendance,
  improveTeamMoraleRemoteTeam,
  howToMeditateAtWork,
  techNeckExercisesDesk,
  preventBurnoutDistributedTeam,
  corporateWellnessIdeasRemoteTeams,
  doWorkplaceWellnessAppsWork,
  chairYogaAtYourDesk,
  deskYoga5MinuteRoutine,
  breathingExercisesForWorkStress,
  fiveMinuteDeskMeditation,
  neckAndShoulderStretchesDeskWorkers,
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);
