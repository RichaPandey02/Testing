import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
//creating the suite-subscribe()
describe("The test for app component",()=>{
  beforeEach(async()=>{
   await TestBed.configureTestingModule({
      declarations:[AppComponent],
      providers:[]
    }).compileComponents()
  })
  let fixture:ComponentFixture<AppComponent>
  let cmp:AppComponent
  beforeEach(()=>{
     fixture=TestBed.createComponent(AppComponent)
    cmp=fixture.componentInstance
    fixture.detectChanges()
  })

  //write the test -it()
  it("should contain hello richa",()=>{
    const compiled=fixture.debugElement.nativeElement;
    console.log("COMPILED",compiled.querySelector("h3").textContent);
    expect(compiled.querySelector("h3").textContent).toContain("hello richa");
  })
  it("should create component",()=>{
    expect(cmp).toBeTruthy()
  })
  it("should have username",()=>{
    expect(cmp.username).toBe("richa");
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })
  it("to be equal to 1",()=>{
    const num=1;
    expect(num).toEqual(1);
  })

})
