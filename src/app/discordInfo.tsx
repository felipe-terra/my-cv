'use client';

import { useState, useEffect } from 'react';

const API_URL = "http://209.126.77.229:8080/users/1058882220594565141?token=523d7df7-0e6d-45eb-b6a0-6cba8fef6d56";

interface ConnectedAccount {
  type: string;
  name: string;
  id: string;
}

interface AvatarDecoration {
  url: string;
  asset: string;
  sku_id: string;
  expires_at: string | null;
}

interface DiscordUserData {
  user: {
    id: string;
    username: string;
    tag: string;
    premiumType: string;
  };
  nitro: {
    subscriptionType: string;
    subscriptionSince: string;
    currentlyBoostedGuilds: number;
  };
  profile: {
    aboutMe: string | null;
    pronouns: string | null;
    avatarUrl: string;
    avatar_decoration: AvatarDecoration;
  };
  connectedAccounts: ConnectedAccount[];
}

export function useDiscordUser() {
  const [userData, setUserData] = useState<DiscordUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscordUser = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch Discord user data');
        }
        const data = await response.json();
        console.log('Discord data:', data);
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchDiscordUser();
  }, []);

  return { userData, loading, error };
}

export function DiscordInfo() {
  const { userData, loading, error } = useDiscordUser();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <img src="/loading.svg" alt="Loading..." className="w-12 h-12 animate-spin" />
        <p className="text-white/70 text-sm">Carregando informações...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Erro: {error}</p>;
  }

  if (!userData) {
    return <p className="text-white">Nenhum dado encontrado</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Avatar info */}
      <div className="relative w-36 h-36">
        {userData.profile?.avatarUrl && (
          <img
            src={userData.profile.avatarUrl}
            alt={`Avatar de ${userData.user.username}`}
            className="w-full h-full rounded-full object-cover border-2 border-white/10 hover:border-white/30 transition-colors z-10"
          />
        )}
        {userData.profile?.avatar_decoration && (
          <img
            src={userData.profile.avatar_decoration.url}
            alt="Avatar decoration"
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
          />
        )}
      </div>
      {/* Username and tag info */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl text-white font-medium text-center">
          {userData.user.username}
        </p>
        <p className="text-sm text-gray-400 text-center">
          @{userData.user.tag}
        </p>

        {/* Social Media Links */}
        <div className="flex flex-col items-center gap-2 mt-12">
          <p className="text-sm text-gray-400 font-medium">Socials</p>
          <div className="flex gap-2">
            <a
              href="https://twitter.com/felpsc4kkj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <img
                src="/icons/twitter.svg"
                alt="Twitter icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-white">@felpsc4kkj</span>
            </a>
            <a
              href="https://github.com/felipe-terra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-white">felipe-terra</span>
            </a>
            <a
              href="https://open.spotify.com/user/dufyar993u3419u417xch910a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <img
                src="/icons/spotify.svg"
                alt="Spotify icon"
                className="w-4 h-4"
              />
              <span className="text-sm text-white">music :D</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}