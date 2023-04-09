import {
  FavoriteCard,
  FavoriteImage,
  FavoriteTitle,
  FavoriteDescription,
  FavoriteItems,
  FavoriteTimeWrap,
  BasketSvg,
  BasketWrap,
  Time,
  FavoriteTextPartWrap,
  FavoriteInstraction,
  BasketSvgWhite,
  FavoriteBtn,
} from './FavoriteList.styled';
import useMediaQuery from 'components/Hooks/useMediaQuery';

export const FavoriteList = ({ items, onClick }) => {

  const isMobile = useMediaQuery('(max-width: 767px)');
   const isDesktop = useMediaQuery('(min-width: 1440px)');
  
 const elementsMob = items.map(({ _id, title, preview, description, time }) => (
   <FavoriteCard key={_id}>
     <FavoriteImage src={preview} alt="dish" />
     <FavoriteTextPartWrap>
       <FavoriteTitle>{title}</FavoriteTitle>
       <FavoriteDescription>{description}</FavoriteDescription>
       <FavoriteTimeWrap>
         <Time>{time ? time : 20} min</Time>
         <BasketWrap type="button" onClick={() => onClick(_id)}>
           <BasketSvg />
         </BasketWrap>
       </FavoriteTimeWrap>
     </FavoriteTextPartWrap>
   </FavoriteCard>
 )); 
  
   const elementsDesktop = items.map(
     ({ _id, title, preview, description, time, instructions }) => (
       <FavoriteCard key={_id}>
         <FavoriteImage src={preview} alt="dish" />
         <FavoriteTextPartWrap>
           <div>
             <FavoriteTitle>{title}</FavoriteTitle>
             <BasketWrap type="button" onClick={() => onClick(_id)}>
               {isDesktop ? <BasketSvg /> : <BasketSvgWhite />}
             </BasketWrap>
           </div>
           <FavoriteDescription>{description}</FavoriteDescription>
           <FavoriteInstraction>{instructions}</FavoriteInstraction>
           <FavoriteTimeWrap>
             <Time>{time ? time : 20} min</Time>
             <FavoriteBtn>See recipe</FavoriteBtn>
           </FavoriteTimeWrap>
         </FavoriteTextPartWrap>
       </FavoriteCard>
     )
   ); 

  return (
    <>
      <FavoriteItems>{isMobile ? elementsMob : elementsDesktop}</FavoriteItems>
    </>
  );
};
