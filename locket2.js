// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @minhdat07 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var minhdat07={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2026-11-23T01:04:18Z",purchase_date:"2026-11-23T01:04:17Z",store:"app_store"},dat2007={grace_period_expires_date:null,purchase_date:"2026-11-23T01:04:17Z",product_identifier:"com.minhdat07.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(dat2007.product_identifier=s,obj.subscriber.subscriptions[s]=minhdat07):obj.subscriber.subscriptions["com.minhdat07.premium.yearly"]=minhdat07,obj.subscriber.entitlements[e]=dat2007}else obj.subscriber.subscriptions["com.dat2007.premium.yearly"]=minhdat07,obj.subscriber.entitlements.pro=dat2007;$done({body:JSON.stringify(obj)});