import type Feather from '@expo/vector-icons/Feather';

export const Routes: {
  name: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
}[] = [
  {
    name: 'index',
    label: 'Home',
    icon: 'home',
  },
  {
    name: 'profile',
    label: 'Profile',
    icon: 'user',
  },
  {
    name: 'saved',
    label: 'Saved',
    icon: 'bookmark',
  },
  {
    name: 'search',
    label: 'Search',
    icon: 'search',
  },
];
