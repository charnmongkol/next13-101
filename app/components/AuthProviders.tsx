"use client";
import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams: Record<string, string> | null;
};
//multiple providers
type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const resp = await getProviders();
      console.log(resp);
      setProviders(resp);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, index) => (
          <button key={index} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
