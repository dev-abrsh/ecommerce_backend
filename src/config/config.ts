

export default () => ({
    database: {
        MONGODB_URI: process.env.MONGODB_URI
    },
    jwt: {
        SECRET: process.env.JWT_SECRET
    },
    frontendUrl: process.env.FRONTEND_URL
})