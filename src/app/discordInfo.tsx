'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const API_URL = "https://rhxapi.site/users/1058882220594565141";

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
        <Image 
          src="/loading.svg" 
          alt="Loading..." 
          width={48}
          height={48}
          className="animate-spin"
        />
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
    <div className="flex flex-col items-center justify-center h-full gap-6">
      {/* Avatar info */}
      <div className="relative w-32 h-32">
        <Image
          src={userData.profile.avatarUrl}
          alt={`${userData.user.username}'s avatar`}
          width={128}
          height={128}
          priority
          className="rounded-full border-2 border-white/10 hover:border-white/30 transition-all duration-300"
        />
      </div>

      {/* Username and tag info */}
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-2xl text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {userData.user.username}
        </h3>
        <p className="text-sm text-gray-400">
          @{userData.user.tag}
        </p>
      </div>

      {/* About Me section if available */}
      {userData.profile.aboutMe && (
        <p className="text-sm text-gray-300 text-center max-w-[300px] italic">
          &quot;{userData.profile.aboutMe}&quot;
        </p>
      )}

      {/* Social Media Links */}
      <div className="flex flex-col items-center gap-3">
        <h4 className="text-sm text-gray-400 font-medium uppercase tracking-wider">Connect with me</h4>
        <div className="flex gap-2">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 text-xs bg-white/5 rounded-lg hover:bg-[#1DA1F2]/10 hover:scale-105 transition-all duration-300 md:gap-2 md:px-3 md:py-2 md:text-sm"
          >
            <Image
              src="/icons/twitter.svg"
              alt="Twitter icon"
              width={16}
              height={16}
              className="opacity-80 w-3 h-3 md:w-5 md:h-5"
            />
            <span className="truncate max-w-[80px]">Twitter</span>
          </a>
          <a
            href="https://github.com/felipe-terra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 text-xs bg-white/5 rounded-lg hover:bg-[#333]/20 hover:scale-105 transition-all duration-300 md:gap-2 md:px-3 md:py-2 md:text-sm"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub icon"
              width={16}
              height={16}
              className="opacity-80 w-3 h-3 md:w-5 md:h-5"
            />
            <span className="truncate max-w-[80px]">felipe-terra</span>
          </a>
          <a
            href="https://open.spotify.com/user/49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 text-xs bg-white/5 rounded-lg hover:bg-[#1DB954]/10 hover:scale-105 transition-all duration-300 md:gap-2 md:px-3 md:py-2 md:text-sm"
          >
            <Image
              src="/icons/spotify.svg"
              alt="Spotify icon"
              width={16}
              height={16}
              className="opacity-80 w-3 h-3 md:w-5 md:h-5"
            />
            <span className="truncate max-w-[80px]">music :D</span>
          </a>
        </div>
      </div>
    </div>
  );
}