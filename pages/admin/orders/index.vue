<template>
        <section>
           <div class="container-full mt-4 px-4">    
          <!-- Tabs navs -->
            <ul class="justify-content-center nav nav-tabs mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a
                class="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
                >New Orders</a>
            </li>
            <li class="nav-item" role="presentation">
                <a
                class="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
                >Current orders</a
                >
            </li>
            <li class="nav-item" role="presentation">
                <a
                class="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                href="#ex1-tabs-3"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
                >History</a>
            </li>
            </ul>
           </div>
            <!-- Tabs navs -->
            <div class="container-full mt-4 px-4 TableBkg">
                <div class="d-flex justify-content-between pt-5 px-3">
                    <!-- pagination -->
                        <AdminPagination />
                    <!-- end pagination -->
                    <!-- sort section -->
                        <div class="d-flex align-items-center">
                            <p class="sort">Sort</p>
                            <p class="SortStatus px-2">Last Opened</p>   
                        </div>                            
                    <!-- end sort section -->
                </div>
                <!-- table section -->
                <div class="container-full px-3">
                    <!-- table title -->
                    <div class="tableBk">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <p class="TableFont flex-fill">#</p> 
                                        <p class="px-2 TableFont flex-fill">Name</p>
                                        <p class="TableFont flex-fill">Order Id</p>
                                    </div> 
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Date</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Price</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Delivery Status</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Order Status</p>
                                </div>
                                 <div class="col-lg-1 text-end">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- table content -->
                     <div class="ContentBkg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <p class="TableFont flex-fill">1</p> 
                                        <p class="px-2 TableFont flex-fill">Jack Dorsi</p>
                                        <p class="TableFont flex-fill">#14522322</p>
                                    </div> 
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">September30,2022 at 10:56 am</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">$1000</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Unknown</p>
                                </div>
                                <div class="col-lg-1 text-end">
                                    <p class="TableFont">Pending</p>
                                </div>
                                 <div class="col-lg-2 text-center">
                                  <div class="d-flex justify-content-between">
                                  <button type="button" class="DetailBtn btn btn-sm">Details</button>
                                  <i class="bi bi-three-dots-vertical"></i>
                                </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end table content -->
                       <!-- table content -->
                     <div class="ContentBkg">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <p class="TableFont flex-fill">2</p> 
                                        <p class="px-2 TableFont flex-fill">Jack Dorsi</p>
                                        <p class="TableFont flex-fill">#14522322</p>
                                    </div> 
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">September30,2022 at 10:56 am</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">$1000</p>
                                </div>
                                <div class="col-lg-2 text-end">
                                    <p class="TableFont">Unknown</p>
                                </div>
                                <div class="col-lg-1 text-end">
                                    <p class="TableFont">Pending</p>
                                </div>
                                 <div class="col-lg-2 text-center">
                                  <div class="d-flex justify-content-between">
                                  <button type="button" class="DetailBtn btn btn-sm">Details</button>
                                  <i class="bi bi-three-dots-vertical"></i>
                                </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end table content -->
                </div>
            </div>   
        </section>        
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
export default {
name: "admin",
layout: 'admin', 
components: { AdminPagination },
}
</script>

<style scoped>

.ContentBkg {
    border-bottom: 1px solid #f0f0f7;
}

.DetailBtn {
  background-color: #e99d7b;
  color: #231942;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 10pt;
  padding: 5px 25px;
  text-transform: capitalize;
}

.DetailBtn:focus {
    box-shadow: none;
}

.TableFont {
   font-family: 'Source Sans Pro', sans-serif;
   font-size: 10pt;
}

p {
    margin-bottom: 0px;
}

.tableBk {
    background-color: #f5f6fa;
}

.SortStatus {
  color: #828282;
  font-family: 'Open Sans';
  font-size: 10pt;
  font-weight: 400;
}

.sort {
    color: #000000;
    font-family: 'Open Sans';
    font-size: 14pt !important;
    font-weight: 400;
    font-size: 10pt;
}

.TableBkg {
    background-color: #fff;
    min-height: 80vh;
}

.nav-link {
   font-family:  'Source Sans Pro', sans-serif;
    color: #9296ad;
    background-color: #fff;
    font-size: 10pt;
}

.nav-link.active {
    background-color: #055452;
    color: #fff !important;
    border-radius: 8px;
    font-weight: 600;
}

.nav-tabs {
    border-bottom: 0;
}
</style>