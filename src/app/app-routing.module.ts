import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' }},
  { path: 'home', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/homethree/homethree.module').then(m => m.HomethreeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'profil-user', loadChildren: () => import('./components/pages/bloglist/bloglist.module').then(m => m.BloglistModule), data: { breadcrumb: 'Profil' } },
  { path: 'market-price', loadChildren: () => import('./components/pages/blogmasonry/blogmasonry.module').then(m => m.BlogmasonryModule), data: { breadcrumb: 'Prix du marché' } },
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: 'Panier' } },
  { path: 'coursier', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: 'Devenir livreur / Transporteur' } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Devenir vendeur' } },
  { path: 'error', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } },
  { path: 'legal', loadChildren: () => import('./components/pages/legal/legal.module').then(m => m.LegalModule), data: { breadcrumb: 'Legal' } },
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) , data: { breadcrumb: 'Login' }},
  { path: 'reset/:variable', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) , data: { breadcrumb: 'Login' }},
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule), data: { breadcrumb: 'Register' } },
  { path: 'post-single/:id', loadChildren: () => import('./components/pages/postsingle/postsingle.module').then(m => m.PostsingleModule), data: { breadcrumb: 'Post Details' } },
  { path: 'product-single/:id', loadChildren: () => import('./components/pages/productsingle/productsingle.module').then(m => m.ProductsingleModule), data: { breadcrumb: 'Details Produit' } },
  { path: 'product-single-v2/:id', loadChildren: () => import('./components/pages/productsingletwo/productsingletwo.module').then(m => m.ProductsingletwoModule), data: { breadcrumb: 'Detail Produit' } },
  { path: 'detail/:id', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: 'Detail Commande' } },
  { path: 'shop-v1', loadChildren: () => import('./components/pages/shopone/shopone.module').then(m => m.ShoponeModule), data: { breadcrumb: 'Shop v1 (Default)' } },
  { path: 'shop-v2', loadChildren: () => import('./components/pages/shoptwo/shoptwo.module').then(m => m.ShoptwoModule), data: { breadcrumb: 'Shop v2 (Full Width)' } },
  { path: 'shop-v3/:variable', loadChildren: () => import('./components/pages/shopthree/shopthree.module').then(m => m.ShopthreeModule), data: { breadcrumb: 'Tous nos produits' } },
  { path: 'produit-recent/:variable', loadChildren: () => import('./components/pages/shopthree/shopthree.module').then(m => m.ShopthreeModule), data: { breadcrumb: 'Tous nos produits' } },
  { path: 'commande', loadChildren: () => import('./components/pages/commande/commande.module').then(m => m.CommandeModule), data: { breadcrumb: 'Mes Commandes' } },
  { path: 'shop-v4', loadChildren: () => import('./components/pages/shopfour/shopfour.module').then(m => m.ShopfourModule), data: { breadcrumb: 'Shop v4 (List view)' } },
  { path: '**', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
