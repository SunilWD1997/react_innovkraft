import NextAuth from "next-auth/next";
// import AppleProvider from 'next-auth/providers/apple';
// import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";




export default NextAuth({
    providers:[
        GithubProvider({
            clientId: 'a78555f48c3e391d8e13',
            clientSecret: '606c77dc94e3c1f02bba0f2c9904a1d1b149a17a'
        }),
        GoogleProvider({
            clientId: '76524141790-rmeq10621jbn6fq9gfvhca26erplmm10.apps.googleusercontent.com',
            clientSecret: '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'
        }),
    ]
})