	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#328987";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=39;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1273;;bookConfig.securityType="1";bookConfig.CreatedTime ="201108133414";bookConfig.bookTitle="REVISED CITIZENS CHARTER 2020";bookConfig.bookmarkCR="7d2df28960ee7feae9e1592e48b905fad13e05c1";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.441148","width":"0.111040","height":"0.018537"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.530643","width":"0.239478","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSU.B.Admission"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.601165","width":"0.222626","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUCarmona%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.671889","width":"0.190133","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUTC%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.741202","width":"0.328405","height":"0.015968"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCaviteStateUniversitySilangCampus"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.812378","width":"0.261282","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUgeneraltrias2012%2F"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.123346","width":"0.272968","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.145107","width":"0.181725","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.165256","width":"0.204385","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.490867","y":"0.187219","width":"0.278953","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.434096","width":"0.111040","height":"0.018739"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.523558","width":"0.239478","height":"0.015750"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSU.B.Admission"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.594113","width":"0.222626","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUCarmona%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.664836","width":"0.190133","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUTC%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.734149","width":"0.328405","height":"0.015968"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCaviteStateUniversitySilangCampus"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.805326","width":"0.261282","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUgeneraltrias2012%2F"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.123346","width":"0.272968","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.145107","width":"0.181725","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.165256","width":"0.204385","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.487732","y":"0.187219","width":"0.278953","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.536922","y":"0.420999","width":"0.111016","height":"0.018537"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.510461","width":"0.239454","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSU.B.Admission"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.581016","width":"0.222638","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUCarmona%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.651740","width":"0.190110","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUTC%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.721052","width":"0.328381","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCaviteStateUniversitySilangCampus"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.791625","width":"0.261258","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUgeneraltrias2012%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.862341","width":"0.272944","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.123346","width":"0.181702","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.142891","width":"0.204396","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521104","y":"0.163846","width":"0.278930","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.499846","y":"0.414148","width":"0.111040","height":"0.018537"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.437722","width":"0.111040","height":"0.018739"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.527184","width":"0.239478","height":"0.015750"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSU.B.Admission"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.597740","width":"0.222626","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUCarmona%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.668463","width":"0.190133","height":"0.015716"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUTC%2F"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.737776","width":"0.328405","height":"0.015968"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCaviteStateUniversitySilangCampus"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.808953","width":"0.261282","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.facebook.com%2FCvSUgeneraltrias2012%2F"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.123346","width":"0.272968","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.145107","width":"0.181725","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.165256","width":"0.204385","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.187219","width":"0.278953","height":"0.015918"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fdrive.goohttps%2F%2Fdrive.google.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharinggle.com%2Ffile%2Fd%2F1HEE-vQeORftFJfQs80yktIpOTSWnK3L-%2Fview%3Fusp%3Dsharing"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.484882","y":"0.437722","width":"0.111040","height":"0.018739"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.512672","y":"0.448804","width":"0.111040","height":"0.018537"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.698102","y":"0.483259","width":"0.111052","height":"0.018739"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.cvsu.edu.ph/"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}