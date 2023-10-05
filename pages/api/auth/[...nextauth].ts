import NextAuth from "next-auth/next";
import KakaoProvider from 'next-auth/providers/kakao'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = ({
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
    }),
  ],
})

export default NextAuth(authOptions)
