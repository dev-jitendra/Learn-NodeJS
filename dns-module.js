// DNS Module
import dns from 'dns';

dns.lookup('certipath.in',(error,address,family)=>{
    if(error) throw error;
    console.log(address);
    console.log(family);
});
// Resolve
dns.resolve('certipath.in','NS',(error,records)=>{
    if(error) throw error;
    console.log(records); 
});