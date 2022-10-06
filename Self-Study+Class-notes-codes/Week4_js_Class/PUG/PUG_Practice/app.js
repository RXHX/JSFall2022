const express =  require('express');
const app = express();
const port = 3000;
const bodyParser =  require('body-parser');
app.use('/static/route',express.static('public'));
app.set('view engine','pug');
songs=['Sgt. Peppers Lonely Hearts Club Band','With a Little Help from My Friends','Lucy in the Sky with Diamonds','Getting Better' ,'Fixing a Hole','Shes Leaving Home','Being for the Benefit of Mr. Kite!' ,'Within You Without You','When Im Sixty-Four','Lovely Rita','Good Morning Good Morning','Sgt. Peppers Lonely Hearts Club Band (Reprise)','A Day in the Life'];
app.get('/',(req,res)=>{
   res.render('list',{songs});
});
app.listen(port,()=>{
   console.log(`The app is listening at ${port}`);
});



