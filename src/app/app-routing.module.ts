import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './pages/channel/channel.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlayerComponent } from './pages/player/player.component';
import { UploadVideoComponent } from './pages/upload-video/upload-video.component';
import { ChangeVideoComponent } from './pages/user/change-video/change-video.component';
import { CreateComponent } from './pages/user/create/create.component';
import { UserGuard } from './services/user.guard';


const routes: Routes = [
  
  { path:"", component:HomeComponent, pathMatch:"full" },
  { path:"login", component:LoginComponent },
  { path:"play/:id", component:PlayerComponent },
  { path:"channel/:userId", component: ChannelComponent},
  {
    path:"upload",
    component:UploadVideoComponent,
    canActivate: [UserGuard]
  },
  {
    path:"user",
    component:CreateComponent,
    canActivate: [UserGuard],
    children:[
      {
        path:"change-video",
        component: ChangeVideoComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
