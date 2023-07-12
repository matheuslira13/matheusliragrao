import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {


  const ofertToday = "https://image.graodegente.app/ofertas%2Ftudo-off%2Fkit-berco%2Fbanner-mobo-fix.png"
  const firstMainBanner = "https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FBannerHeroDesk1.png?alt=media&token=1fd4a7dd-9e60-4ea3-8404-2a43034e9b38"
  const babyProduct = [
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2Fbanner1desk1.png?alt=media&token=d9240d2b-9861-41b7-9b02-41369b6e1529"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FBannerHeroDesk1.png?alt=media&token=1fd4a7dd-9e60-4ea3-8404-2a43034e9b38"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2Fbanner1desk3.png?alt=media&token=d9240d2b-9861-41b7-9b02-41369b6e1529"}
  ]
  const secondMainBanner = "https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FBannerHeroDesk1.png?alt=media&token=1fd4a7dd-9e60-4ea3-8404-2a43034e9b38"
  const enxovalProduct = [
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk1.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk2.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk3.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk4.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrMob5.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk6.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FCarrDesk7.png?alt=media&token=8826a694-777f-4f68-95c5-dc074377975f"},
  ]
  const cradleOffer = [
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2Fbanner3desk.png?alt=media&token=bf5016d1-7da9-4ba2-aaf9-f70daaa1b981"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FKitbercoDesk2.png?alt=media&token=ed2a934a-feed-4203-9f2d-7fc4c0b3b13a"},
    {image:"https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/ofertas%2Ftudo-off%2Fkit-berco%2FKitbercoDesk3.png?alt=media&token=ed2a934a-feed-4203-9f2d-7fc4c0b3b13a"}
]


  res.status(200).json([{ name: ofertToday }])
}
