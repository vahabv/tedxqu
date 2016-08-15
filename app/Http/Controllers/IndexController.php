<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\About;
use App\Sponsors;
use App\Team2015;
use App\Team2016;
use App\Speakers2015;
use App\Speakers2016;
class IndexController extends Controller
{
    public function indexshow(){
    	$abouts = About::orderBy('orderby', 'asc')->get();
    	$sponsors = Sponsors::orderBy('orderby', 'asc')->get();
    	$members2015 = Team2015::orderBy('orderby', 'asc')->get();
    	$members2016 = Team2016::orderBy('orderby', 'asc')->get();
    	$speakers2015 = Speakers2015::orderBy('orderby', 'asc')->get();
    	$speakers2016 = Speakers2016::orderBy('orderby', 'asc')->get();
        return view('mainview', compact('abouts', 'sponsors', 'members2015', 'members2016', 'speakers2015', 'speakers2016'));
    }
    public function videoreturn($id){
    	$speakerRow = Speakers2015::where('id',$id)->first();
    	return $speakerRow;
    }
    public function inforeturn($id2){
    	$speaker6Row = Speakers2016::where('id',$id2)->first();
    	return $speaker6Row;
    }
}
