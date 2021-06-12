import { DataService } from './data.service';
describe(" should test for data service",()=>{
  let dataservice:DataService
  beforeEach(()=>{
    dataservice=new DataService();
  })
  afterAll(()=>{
    dataservice=null
  })
  it("should set the email richapandey0297@gmail.com",()=>{

    const email="richapandey0297@gmail.com"
    dataservice.setEmail(email);
    expect(dataservice.getEmail()).toBe(email);
  })
  it("should test promise",()=>{
    dataservice.getPromise()
    .then(res=>{
      expect(res).toContain("p")
    })

  })
  it("should test observable",()=>{
    dataservice.getObservable()
    .subscribe(data=>{
      expect(data).toEqual("apple");
    })
  })
})
