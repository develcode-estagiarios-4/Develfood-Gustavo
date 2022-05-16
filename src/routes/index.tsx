import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth';
import SignIn from '../screens/SignIn/SignIn'
import AppRoutes from './routes.routes'

export function Routes() {
    const { token } = useAuth();

    return(
        token ? <AppRoutes /> : <SignIn />
    )
}