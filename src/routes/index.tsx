import React from 'react'
import { useAuth } from '../hooks/auth';
import AuthRoutes from './authRoutes';
import RestaurantRoutes from './restaurantRoutes';
import AppRoutes from './routes.routes'

export function Routes() {
    const { token } = useAuth();

    return(
        token ? <RestaurantRoutes /> : <AuthRoutes />
    )
}