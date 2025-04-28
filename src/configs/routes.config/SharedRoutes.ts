import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const SharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
]

export default SharedRoutes
