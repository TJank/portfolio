import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        authenticate: builder.mutation({
            query: (data) => ({
                url: '/api/Auth/authenticate',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
              
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.jwtToken,
                        user: result.data
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.jwtToken,
                        user: result.data
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: '/api/ForgotPassword',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data);
                    // if (result.data.isSuccess) {
                    // toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    // toast.warning(result?.data?.message)
                    // }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        validateResetPasswordToken: builder.query({
            query: (token) => `/api/ValidateResetPasswordLink/${token}`,
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data)
                    // {data: '5', isSuccess: true, message: 'Record exists'}
                    // if (result.data.isSuccess) {
                    // toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    // toast.warning(result?.data?.message)
                    // }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        forgotPasswordByLink: builder.mutation({
            query: (data) => ({
                url: '/api/ForgotPasswordByLink',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data)
                    // if (result.data.isSuccess) {
                    // toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    // toast.warning(result?.data?.message)
                    // }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
    })
})


export const {
    useAuthenticateMutation,
    useForgotPasswordMutation,
    useValidateResetPasswordTokenQuery,
    useForgotPasswordByLinkMutation,

} = authApi;