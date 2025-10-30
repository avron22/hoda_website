import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function FashionModel(){
  return (
    <>
    <div className="h-[100vh] flex flex-col overflow-x-hidden justify-between">
        <div className="pt-[60px] px-[140px]">
          <Navbar />
        </div>
          <div className="px-[140px] pb-20 flex flex-col gap-5">
          <h1 className="text-[50px] font-bold text-center pt-[100px]">RUNWAY MODEL</h1>
            <div className=" mx-auto">
              {/* Grid Container */}
              <div className="grid grid-cols-30 gap-5 auto-rows-[150px]">
                
                {/* Left - Tall Image (spans 3 columns, 4 rows) */}
                <div className="col-span-30 md:col-span-10 row-span-5">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_1.png" 
                      alt="Fashion 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Top Middle - Portrait (spans 3 columns, 3 rows) */}
                <div className="col-span-30 md:col-span-9 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_2.png" 
                      alt="Fashion 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Top Right - Wide horizontal (spans 6 columns, 2 rows) */}
                <div className="col-span-30 md:col-span-11 row-span-2">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_3.png" 
                      alt="Fashion 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Middle Bottom - Medium (spans 3 columns, 3 rows) */}
                <div className="col-span-30 md:col-span-6 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_5.png" 
                      alt="Fashion 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Middle - Square (spans 3 columns, 3 rows) */}
                <div className="col-span-30 md:col-span-5 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_6.png" 
                      alt="Fashion 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Bottom Square (spans 3 columns, 3 rows) */}
                <div className="col-span-30 md:col-span-9 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Brown_4.png" 
                      alt="Fashion 6"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*Yellow 1*/}
                <div className="col-span-30 md:col-span-10 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_1.png" 
                      alt="Fashion 7"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*Yellow 2*/}
                <div className="col-span-30 md:col-span-11 row-span-5">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_3.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*Yellow 3*/}
                <div className="col-span-30 md:col-span-9 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_2.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*Yellow 4*/}
                <div className="col-span-30 md:col-span-5 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_4.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Yellow 5*/}
                <div className="col-span-30 md:col-span-5 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_5.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Yellow 6*/}
                <div className="col-span-30 md:col-span-9 row-span-2">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Yellow_6.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/*Pink 1*/}
                <div className="col-span-30 md:col-span-11 row-span-4">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Pink_3.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Pink 2*/}
                <div className="col-span-30 md:col-span-10 row-span-6">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Pink_1.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Pink 3*/}
                <div className="col-span-30 md:col-span-9 row-span-4">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Pink_2.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Pink 4*/}
                <div className="col-span-30 md:col-span-11 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Pink_5.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Pink 5*/}
                <div className="col-span-30 md:col-span-9 row-span-2">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Pink_4.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/*Moon 1*/}
                <div className="col-span-30 md:col-span-10 row-span-6">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Moon_1.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                
                {/*Moon 2*/}
                <div className="col-span-30 md:col-span-9 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Moon_2.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                
                {/*Moon 3*/}
                <div className="col-span-30 md:col-span-11 row-span-6">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Moon_4.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                
                {/*Moon 4*/}
                <div className="col-span-30 md:col-span-9 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Moon_3.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                
                {/*Red 1*/}
                <div className="col-span-30 md:col-span-8 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Red_1.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                                
                {/*Red 2*/}
                <div className="col-span-30 md:col-span-11 row-span-6">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Red_3.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                                
                {/*Red 3*/}
                <div className="col-span-30 md:col-span-11 row-span-6">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Red_4.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                                                
                {/*Red 4*/}
                <div className="col-span-30 md:col-span-8 row-span-3">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="../src/assets/FASHION/Red_2.png" 
                      alt="Fashion 8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </>
  );
}