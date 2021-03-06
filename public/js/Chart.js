function myYRangeFunction(range) {
  // TODO implement your calculation using range.min and range.max
  var min = 200
  var max = 750;
  return {min: min, max: max};
}

var chart = new SmoothieChart({labels:{fillStyle:'#020107',disabled:false},millisPerPixel:25,grid:{fillStyle:'#ffffff',strokeStyle:'rgba(233,233,233,0.80)',verticalSections:9},maxValue:750,minValue:200, yRangeFunction:myYRangeFunction}),
    canvas = document.getElementById('smoothie-chart'),
    series = new TimeSeries();

    chart.streamTo(canvas, 20);


var data = ['S440','S452','S451','S451','S452','S452','S452','S457','S468','S472','B92','Q638','S494','S513','S523','S530','S529','S523','S511','S461','S459','S455','S452','S451','S451','S452','S452',
'S452','S457','S468','S472','B92','Q638','S494','S513','S523','S530','S529','S523','S511','S0','S416','S419','S437','S461','S487','S517','S548','S575','S597','S611','S617','S610','S597','S581','S561',
'S539','S522','S510','S499','S493','S492','S494','S495','S494','S492','S492','S489','S488','S485','S481','S477','S473','S471','S465','S468','S476','S494','S516','S535','S575','S618','S652','S672','S673',
'S656','S634','S602','S570','S542','S517','S513','S501','S491','S484','S486','S485','S480','S478','S476','S475','S477','S475','S472','S467','S466','S463','S464','S464','S463','S478','S505','S544','S575',
'B84','Q706','S588','S614','S631','S632','S617','S595','S572','S564','S543','S517','S499','S484','S475','S476','S478','S480','S482','S481','S480','S484','S479','S478','S477','S474','S469','S464','S464',
'S466','S475','S493','S521','S553','B85','Q646','S585','S627','S660','S680','S681','S668','S648','S619','S585','S556','S542','S524','S502','S487','S477','S470','S473','S476','S481','S483','S481','S475',
'S472','S472','S473','S471','S468','S465','S467','S483','S511','S556','S594','B86','Q658','S653','S708','S748','S761','S754','S724','S681','S631','S584','S555','S528','S506','S494','S482','S475','S477',
'S479','S479','S477','S470','S469','S469','S467','S461','S456','S453','S455','S457','S462','S469','S487','S507','S533','S566','S594','S613','B85','Q738','S628','S638','S631','S612','S592','S570','S545',
'S524','S511','S505','S505','S504','S507','S511','S511','S507','S503','S499','S493','S487','S484','S480','S474','S468','S465','S465','S467','S474','S487','S514','S541','B86','Q628','S563','S601','S641',
'S668','S673','S660','S638','S608','S577','S548','S536','S523','S511','S502','S496','S496','S493','S494','S493','S490','S489','S492','S486','S477','S468','S462','S458','S453','S457','S468','S488','S513',
'S547','S574','B87','Q686','S594','S623','S638','S640','S627','S605','S584','S569','S547','S518','S494','S474','S464','S466','S470','S477','S481','S479','S476','S472','S469','S464','S463','S460','S458',
'S461','S466','S480','S500','S534','S559','B88','Q626','S583','S614','S637','S644','S635','S615','S588','S562','S546','S529','S507','S487','S478','S479','S481','S483','S486','S488','S486','S481','S475',
'S469','S462','S456','S456','S461','S474','S498','S530','S559','B89','Q610','S580','S621','S648','S661','S652','S629','S599','S569','S550','S527','S498','S481','S469','S463','S462','S462','S466','S470',
'S471','S468','S460','S461','S454','S450','S447','S451','S468','S495','S539','S569','B90','Q604','S598','S630','S655','S667','S660','S636','S609','S578','S555','S533','S509','S494','S484','S478','S478',
'S476','S475','S475','S473','S472','S469','S462','S458','S454','S458','S468','S491','S526','S571','B92','Q590','S603','S651','S687','S701','S696','S678','S645','S606','S569','S550','S523','S497','S478',
'S469','S467','S466','S467','S469','S469','S468','S468','S465','S454','S447','S443','S451','S470','S504','S550','S596','B94','Q600','S639','S682','S705','S712','S701','S675','S640','S602','S570','S541',
'S514','S492','S475','S466','S464','S462','S468','S468','S464','S458','S451','S444','S435','S429','S425','S425','S434','S459','S495','S541','S588','B94','Q634','S625','S675','S706','S716','S708','S684',
'S649','S611','S574','S542','S510','S482','S463','S456','S454','S455','S460','S465','S466','S461','S453','S447','S443','S439','S434','S431','S428','S427','S429','S435','S452','S481','S520','S568','S604',
'B93','Q694','S649','S683','S704','S705','S684','S652','S613','S573','S552','S523','S496','S480','S472','S466','S466','S468','S467','S462','S456','S454','S456','S451','S448','S443','S438','S432','S427',
'S426','S424','S432','S438','S449','S473','S504','S548','S578','B93','Q732','S615','S647','S662','S663','S653','S627','S595','S562','S543','S515','S488','S471','S462','S461','S463','S465','S467','S463',
'S460','S457','S451','S448','S446','S443','S438','S436','S432','S433','S435','S439','S439','S438','S444','S453','S482','S513','S550','B91','Q762','S569','S601','S624','S632','S632','S618','S593','S560',
'S542','S522','S495','S475','S463','S459','S460','S464','S466','S469','S469','S467','S463','S456','S451','S448','S448','S443','S439','S435','S434','S432','S433','S433','S434','S435','S444','S458','S477',
'S506','S538','B90','Q788','S557','S589','S612','S621','S615','S602','S579','S554','S530','S519','S497','S478','S467','S462','S461','S463','S465','S463','S464','S462','S463','S461','S456','S458','S455',
'S449','S445','S443','S441','S436','S434','S437','S440','S439','S438','S441','S445','S454','S473','S495','S524','S543','B87','Q834','S566','S598','S613','S612','S600','S580','S556','S532','S525','S508',
'S489','S475','S466','S467','S468','S473','S476','S479','S479','S485','S480','S471','S463','S459','S456','S454','S449','S447','S444','S445','S444','S447','S444','S447','S447','S447','S455','S477','S500',
'S525','B84','Q826','S542','S581','S603','S610','S609','S596','S576','S554','S533','S516','S504','S496','S492','S496','S495','S495','S498','S503','S506','S500','S491','S480','S473','S467','S463','S461',
'S461','S460','S458','S454','S454','S455','S455','S455','S463','S486','B83','Q728','S498','S552','S617','S660','S683','S687','S676','S650','S614','S578','S543','S511','S486','S484','S478','S467','S462',
'S463','S471','S479','S478','S478','S473','S470','S464','S457','S453','S449','S445','S444','S439','S437','S439','S445','S453','S474','S504','S548','S583','B81','Q784','S601','S631','S645','S642','S624',
'S596','S566','S551','S520','S494','S474','S465','S466','S470','S477','S481','S485','S489','S490','S483','S477','S471','S467','S464','S461','S456','S458','S461','S464','S475','S496','S527','S561','B80',
'Q660','S601','S626','S641','S637','S627','S612','S589','S563','S535','S511','S496','S483','S479','S477','S481','S483','S483','S483','S484','S483','S481','S474','S469','S467','S464','S461','S460','S459',
'S462','S479','S513','B80','Q642','S548','S615','S692','S743','S773','S776','S754','S716','S668','S620','S572','S532','S512','S516','S510','S504','S500','S496','S492','S486','S479','S472','S469','S464',
'S461','S453','S448','S446','S439','S437','S435','S449','S484','S539','S611','S674','B80','Q710','S749','S801','S820','S814','S780','S732','S673','S613','S572','S521','S483','S461','S450','S448','S456',
'S463','S467','S467','S463','S456','S446','S437','S431','S423','S417','S412','S412','S409','S410','S414','S421','S449','S505','S584','S660','B80','Q718','S728','S786','S816','S812','S777','S719','S654',
'S602','S544','S492','S458','S442','S437','S436','S439','S442','S445','S453','S450','S447','S441','S436','S431','S425','S420','S416','S416','S416','S419','S438','S481','S554','S649','B81','Q670','S734',
'S833','S890','S904','S884','S830','S755','S677','S603','S553','S498','S466','S455','S454','S462','S469','S473','S474','S470','S466','S460','S450','S447','S446','S440','S434','S425','S416','S415','S433',
'S481','S563','S671','B82','Q672','S765','S856','S920','S927','S897','S835','S754','S661','S590','S521','S462','S421','S398','S395','S405','S416','S430','S438','S445','S448','S442','S431','S421','S409',
'S404','S394','S388','S393','S395','S398','S414','S451','S525','S631','S734','B84','Q698','S831','S897','S925','S900','S838','S746','S646','S562','S483','S420','S380','S370','S379','S394','S413','S430',
'S439','S442','S442','S435','S428','S419','S410','S401','S396','S391','S388','S385','S379','S381','S392','S421','S478','S571','S683','B85','Q716','S780','S876','S921','S916','S863','S782','S684','S604',
'S523','S453','S406','S383','S381','S390','S408','S429','S441','S446','S446','S442','S429','S417','S405','S395','S389','S383','S378','S379','S381','S382','S390','S412','S464','S550','S665','B85','Q710',
'S769','S859','S908','S907','S858','S776','S677','S592','S506','S429','S386','S367','S370','S386','S404','S422','S433','S438','S443','S437','S429','S422','S414','S407','S398','S391','S388','S384','S382',
'S383','S389','S416','S468','S553','S664','B86','Q708','S769','S855','S895','S896','S850','S771','S677','S594','S516','S444','S403','S382','S385','S399','S415','S431','S440','S448','S451','S444','S435',
'S427','S422','S412','S401','S394','S390','S388','S389','S400','S426','S486','S582','S690','B86','Q682','S805','S884','S922','S913','S858','S768','S663','S581','S496','S417','S375','S356','S361','S381',
'S399','S420','S431','S437','S436','S424','S415','S406','S396','S388','S380','S375','S381','S384','S384','S388','S406','S458','S543','S657','B85','Q696','S773','S871','S927','S928','S881','S796','S693',
'S603','S514','S435','S389','S366','S362','S376','S391','S410','S425','S433','S437','S436','S426','S415','S407','S398','S389','S379','S375','S374','S369','S371','S377','S383','S405','S453','S537','S648',
'B85','Q730','S756','S852','S904','S911','S869','S794','S693','S597','S510','S433','S384','S360','S357','S373','S401','S424','S438','S444','S441','S432','S422','S412','S399','S389','S384','S381','S376',
'S372','S371','S371','S370','S376','S388','S410','S458','S536','S641','B85','Q748','S724','S808','S857','S862','S820','S749','S661','S586','S509','S443','S401','S380','S376','S388','S406','S424','S442',
'S449','S447','S444','S432','S416','S403','S392','S388','S383','S382','S381','S382','S382','S385','S385','S390','S410','S455','S524','S618','B84','Q748','S694','S788','S835','S839','S804','S733','S646',
'S576','S507','S445','S406','S383','S381','S391','S408','S423','S434','S446','S446','S439','S433','S424','S413','S403','S396','S392','S393','S387','S386','S383','S385','S389','S393','S395','S409','S449',
'S514','S609','B83','Q770','S677','S759','S812','S821','S790','S734','S651','S581','S516','S458','S417','S401','S400','S408','S424','S440','S450','S463','S462','S457','S450','S437','S430','S420','S411',
'S404','S395','S393','S389','S389','S391','S394','S401','S421','S461','S525','S608','B82','Q746','S671','S745','S789','S791','S759','S705','S634','S574','S515','S460','S424','S410','S408','S415','S429',
'S442','S451','S453','S458','S452','S443','S434','S423','S413','S406','S403','S401','S400','S401','S402','S407','S413','S437','S478','S542','S613','B82','Q724','S682','S750','S792','S797','S764','S704',
'S631','S573','S519','S468','S435','S422','S420','S429','S444','S458','S467','S472','S471','S465','S456','S450','S440','S427','S419','S413','S408','S409','S408','S413','S422','S446','S500','S580','S663',
'B82','Q698','S751','S832','S864','S854','S809','S742','S665','S588','S531','S475','S441','S425','S426','S439','S449','S462','S467','S468','S462','S451','S441','S429','S417','S412','S407','S404','S398',
'S397','S399','S397','S400','S410','S443','S503','S593','S689','B82','Q732','S794','S866','S892','S873','S819','S743','S656','S587','S522','S467','S436','S422','S425','S435','S446','S453','S456','S462',
'S460','S453','S444','S436','S428','S419','S407','S404','S405','S401','S399','S396','S394','S395','S399','S420','S468','S559','S666','B81','Q758','S767','S864','S922','S926','S891','S815','S725','S630',
'S558','S492','S439','S405','S387','S386','S397','S413','S426','S433','S438','S438','S431','S417','S405','S397','S394','S385','S381','S387','S389','S391','S392','S390','S390','S399','S430','S487','S575',
'S679','B80','Q768','S762','S834','S871','S859','S807','S732','S646','S568','S493','S441','S408','S396','S400','S409','S422','S434','S438','S442','S439','S435','S428','S420','S411','S400','S393','S391',
'S389','S393','S391','S392','S395','S412','S451','S516','S605','S687','B81','Q716','S775','S828','S847','S826','S777','S706','S627','S562','S497','S442','S415','S408','S413','S426','S440','S450','S450',
'S446','S439','S428','S416','S406','S395','S389','S387','S384','S384','S383','S387','S393','S402','S418','S458','S527','S625','B81','Q724','S727','S818','S882','S901','S876','S818','S736','S648','S573',
'S510','S455','S420','S399','S391','S397','S408','S418','S430','S432','S430','S424','S415','S406','S396','S390','S384','S383','S380','S378','S382','S385','S385','S392','S408','S444','S515','S607','S703',
'B81','Q758','S795','S867','S898','S882','S825','S751','S666','S597','S533','S475','S436','S417','S410','S412','S427','S442','S448','S455','S448','S443','S436','S429','S422','S417','S418','S420','S423',
'S425','S424','S425','S426','S428','S444','S485','S552','S646','B81','Q740','S724','S819','S879','S890','S857','S785','S698','S616','S542','S469','S415','S386','S379','S386','S394','S412','S434','S444',
'S447','S442','S434','S424','S413','S406','S400','S399'];

console.log('Starting....');
var i = 0;
//for(var i = 0 ; i < data.lenght; i++){
	// setInterval(function() {
 //  		series.append(new Date().getTime(), data[i]);
 //  		i++;
	// }, 20);

//}
setInterval(function() {
  var value =  Math.random();
  //console.log('-> ', data[ i ][ 0 ]);
  if( data[ i ][ 0 ] == 'S' ){
  	//console.log('value -> ', data[ i ].substring(1));
  	//series.append(new Date().getTime(), value * 1000);
  	series.append( new Date().getTime(), data[ i ].substring(1) );
  }
  i++;
}, 20);

chart.addTimeSeries(series, {lineWidth:2,strokeStyle:'#ff0000'});
