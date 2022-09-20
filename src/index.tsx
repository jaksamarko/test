import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const EventLayout = lazy(() => import('./layouts/EventLayout'));
const GameLayout = lazy(() => import('./layouts/GameLayout'));
const NoPageLayout = lazy(() => import('./layouts/NoPageLayout'));

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/events/:eventid" element={<EventLayout />} />
				<Route path="/game" element={<GameLayout />} />
				<Route path="*" element={<NoPageLayout />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
