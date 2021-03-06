<template>
<Page @loaded="onPageLoad" @unloaded="onPageUnload">
  <ActionBar flat="true">
    <GridLayout rows="48" columns="auto, *, auto">
      <MDButton variant="text" row="0" col="0" class="bx" :text="icon.back" automationText="Back" @tap="$navigateBack()" />
      <FlexboxLayout row="0" col="2" alignItems="center">
        <MDButton v-if="!filterTrylater" variant="text" class="bx" :text="recipe.tried ? icon.trylaterOutline : icon.trylater" @tap="toggleTrylater" />
        <MDButton v-else variant="text" class="bx" :text="icon.check" @tap="recipeTried" />
        <MDButton variant="text" class="bx" :text="recipe.isFavorite ? icon.heart : icon.heartOutline" @tap="toggleFavourite" />
        <MDButton variant="text" v-if="!busy" class="bx" :text="icon.edit" @tap="editRecipe" />
        <MDActivityIndicator v-else :busy="busy" />
      </FlexboxLayout>
    </GridLayout>
  </ActionBar>
  <AbsoluteLayout>
    <Tabs width="100%" height="100%" :selectedIndex="selectedTabIndex" @selectedIndexChange="selectedIndexChange" class="viewRecipe">
      <TabStrip :androidElevation="viewIsScrolled ? 4 : 0">
        <TabStripItem>
          <Label :text="'Overview' | L"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label :text="'Ingredients' | L"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label :text="'Instructions' | L"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label :text="'Combinations' | L"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label :text="'Notes' | L"></Label>
        </TabStripItem>
      </TabStrip>
      <TabContentItem>
        <ScrollView @scroll="onScroll">
          <StackLayout>
            <StackLayout width="100%" :height="screenWidth" verticalAlignment="center" class="imageHolder">
              <Image v-if="recipe.imageSrc" :src="recipe.imageSrc" stretch="aspectFill" width="100%" :height="screenWidth" />
              <Label v-else horizontalAlignment="center" class="bx" fontSize="160" :text="icon.image" />
            </StackLayout>
            <StackLayout margin="16 8 80">
              <Label class="category orkm" :text="`${recipe.category}` | L" />
              <Label margin="0 8" class="title orkm" :text="recipe.title" textWrap="true" />
              <Label class="time" :text="`${$options.filters.L('Preparation time')}: ${formattedTime(recipe.prepTime)}`" textWrap="true" />
              <Label class="time" :text="`${$options.filters.L('Cooking time')}: ${formattedTime(recipe.cookTime)}`" textWrap="true" />
              <GridLayout rows="auto, auto" columns="*, *" class="overviewContainer">
                <GridLayout class="overviewItem" row="0" col="0" rows="auto, auto" columns="*">
                  <MDRipple rowSpan="2" @tap="selectedTabIndex = 1" />
                  <Label row="0" class="bx" :text="icon.item" />
                  <Label row="1" class="itemCount" :text="
                        `${recipe.ingredients.length} ${
                          recipe.ingredients.length == 1
                            ? $options.filters.L('Ingredient')
                            : $options.filters.L('Ingredients')
                        }`
                      " textWrap="true" />
                </GridLayout>
                <GridLayout class="overviewItem" row="0" col="1" rows="auto, auto" columns="*">
                  <MDRipple rowSpan="2" @tap="selectedTabIndex = 2" />
                  <Label row="0" class="bx" :text="icon.step" />
                  <Label row="1" class="itemCount" :text="
                        `${recipe.instructions.length} ${
                          recipe.instructions.length == 1
                          ? $options.filters.L('Instruction')
                          : $options.filters.L('Instructions')
                        }`
                      " textWrap="true" />
                </GridLayout>
                <GridLayout class="overviewItem" row="1" col="0" rows="auto, auto" columns="*">
                  <MDRipple rowSpan="2" @tap="selectedTabIndex = 3" />
                  <Label row="0" class="bx" :text="icon.outline" />
                  <Label row="1" class="itemCount" :text="
                        `${recipe.combinations.length} ${
                          recipe.combinations.length == 1
                          ? $options.filters.L('Combination')
                          : $options.filters.L('Combinations')
                        }`
                      " textWrap="true" />
                </GridLayout>
                <GridLayout class="overviewItem" row="1" col="1" rows="auto, auto" columns="*">
                  <MDRipple rowSpan="2" @tap="selectedTabIndex = 4" />
                  <Label row="0" class="bx" :text="icon.note" />
                  <Label row="1" class="itemCount" :text="
                        `${recipe.notes.length} ${
                          recipe.notes.length == 1
                          ? $options.filters.L('Note')
                          : $options.filters.L('Notes')
                        }`
                      " textWrap="true" />
                </GridLayout>
              </GridLayout>
            </StackLayout>
          </StackLayout>
        </ScrollView>
      </TabContentItem>
      <TabContentItem>
        <ScrollView @scroll="onScroll">
          <GridLayout v-if="!recipe.ingredients.length" rows="*, auto, *, 88" columns="*" class="emptyStateContainer">
            <StackLayout col="0" row="1" class="emptyState">
              <Label class="bx icon" :text="icon.item" textWrap="true" />
              <Label class="subTitle orkm" :text="'Use the pencil button to add some ingredients' | L" textWrap="true" />
            </StackLayout>
          </GridLayout>
          <StackLayout v-else padding="24 16 72">
            <AbsoluteLayout class="inputField">
              <TextField width="50%" v-model="yieldMultiplier" keyboardType="number" />
              <Label top="0" class="fieldLabel" :text="`${$options.filters.L('Required')} ${$options.filters.L(recipe.yield.unit)}`" />
            </AbsoluteLayout>
            <Label margin="16 0" class="subTitle orkm" :text="
                    `${$options.filters.L('Ingredients')} (${positiveYieldMultiplier} ${$options.filters.L(recipe.yield.unit)})`
                  " textWrap="true" />
            <StackLayout v-for="(item, index) in recipe.ingredients" :key="index">
              <check-box class="ingredient" checkPadding="16" fillColor="#ff5200" :text="
                    `${
                      roundedQuantity(item.quantity)
                        ? roundedQuantity(item.quantity) + ' '
                        : ''
                    }${roundedQuantity(item.quantity) ? $options.filters.L(item.unit) + ' ' : ''}${
                      item.item
                    }`
                  " />
            </StackLayout>
          </StackLayout>
        </ScrollView>
      </TabContentItem>
      <TabContentItem>
        <ScrollView @scroll="onScroll">
          <GridLayout v-if="!recipe.instructions.length" rows="*, auto, *, 88" columns="*" class="emptyStateContainer">
            <StackLayout col="0" row="1" class="emptyState">
              <Label class="bx icon" :text="icon.step" textWrap="true" />
              <Label class="subTitle orkm" :text="'Use the pencil button to add some instructions' | L" textWrap="true" />
            </StackLayout>
          </GridLayout>
          <StackLayout v-else padding="28 16 62">
            <GridLayout columns="auto ,*" v-for="(instruction, index) in recipe.instructions" :key="index">
              <Label col="0" colSpan="2" class="instruction" :class="{
                    noBorder: index === recipe.instructions.length - 1,
                  }" :text="instruction" textWrap="true" />
              <Label verticalAlignment="top" horizontalAlignment="center" class="count orkm" col="0" :text="index + 1" />
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </TabContentItem>
      <TabContentItem>
        <ScrollView @scroll="onScroll">
          <GridLayout v-if="!recipe.combinations.length" rows="*, auto, *, 88" columns="*" class="emptyStateContainer">
            <StackLayout col="0" row="1" class="emptyState">
              <Label class="bx icon" :text="icon.outline" textWrap="true" />
              <Label class="subTitle orkm" :text="'Use the pencil button to add some combinations' | L" textWrap="true" />
            </StackLayout>
          </GridLayout>
          <StackLayout v-else padding="8 0 80">
            <GridLayout columns="auto, *" v-for="(combination, index) in recipe.combinations" :key="index" androidElevation="1" class="urlCard">
              <MDRipple colSpan="2" @tap="viewCombination(combination)" />
              <Label col="0" class="bx linkIcon" :text="icon.food" />
              <Label col="1" verticalAlignment="center" class="link" :text="getCombinationTitle(combination)" textWrap="true" />
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </TabContentItem>
      <TabContentItem>
        <ScrollView @scroll="onScroll">
          <GridLayout v-if="!recipe.notes.length" rows="*, auto, *, 88" columns="*" class="emptyStateContainer">
            <StackLayout col="0" row="1" class="emptyState">
              <Label class="bx icon" :text="icon.note" textWrap="true" />
              <Label class="subTitle orkm" :text="'Use the pencil button to add some notes' | L" textWrap="true" />
            </StackLayout>
          </GridLayout>
          <StackLayout v-else padding="8 0 80">
            <StackLayout @loaded="createNotes"></StackLayout>
          </StackLayout>
        </ScrollView>
      </TabContentItem>
    </Tabs>
    <GridLayout id="btnFabContainer" rows="*, auto" columns="*, auto">
      <transition name="dolly" appear>
        <MDFloatingActionButton row="1" col="1" src="res://share" @tap="shareHandler" v-if="showFab" />
      </transition>
    </GridLayout>
  </AbsoluteLayout>
</Page>
</template>

<script>
import {
  Application,
  Color,
  ImageSource,
  Screen,
  Utils,
  Span,
  FormattedString,
  Label,
  Observable
}
from "@nativescript/core"
import {
  Feedback,
  FeedbackType,
  FeedbackPosition
}
from "nativescript-feedback"
import * as Toast from "nativescript-toast"
import * as SocialShare from "@nativescript/social-share"
import {
  localize
}
from "@nativescript/localize"
import {
  mapActions,
  mapState
}
from "vuex"
import EditRecipe from "./EditRecipe.vue"
import ViewRecipe from "./ViewRecipe.vue"
import ShareChooser from "./modal/ShareChooser.vue"
let feedback = new Feedback()
export default {
  props: [ "filterTrylater", "recipeID" ],
  data() {
    return {
      busy: false,
      yieldMultiplier: 1,
      recipe: null,
      showFab: false,
      selectedTabIndex: 0,
      currentRecipeID: this.recipeID,
      viewIsScrolled: false,
      isScrolled: [ false, false, false, false, false, false ],
      hideActionBar: false,
    }
  },
  computed: {
    ...mapState( [ "icon", "recipes" ] ),
    screenWidth() {
      return Screen.mainScreen.widthDIPs
    },
    positiveYieldMultiplier() {
      return Math.abs( this.yieldMultiplier ) > 0 ? Math.abs( parseFloat( this.yieldMultiplier ) ) : 1
    },
    isLightMode() {
      return Application.systemAppearance() === "light"
    },
  },
  methods: {
    ...mapActions( [ "toggleStateAction", "setCurrentComponentAction", "overwriteRecipeAction", "setRecipeAsTriedAction", ] ),
    onPageLoad( args ) {
      const page = args.object;
      page.bindingContext = new Observable();
      this.busy = false
      setTimeout( ( e ) => {
        this.setCurrentComponentAction( "ViewRecipe" )
      }, 500 )
      this.showFab = true
      this.yieldMultiplier = this.recipe.yield.quantity
      this.keepScreenOn( true )
      this.syncCombinations()
    },
    onPageUnload() {
      feedback.hide()
      this.keepScreenOn( false )
    },
    // HELPERS
    niceDates( time ) {
      let lastTried = new Date( time ).getTime()
      let now = new Date().getTime()
      let midnight = new Date().setHours( 0, 0, 0, 0 )
      let diff = ( now - lastTried ) / 1000
      let dayDiff = Math.ceil( diff / 86400 )
      if ( isNaN( dayDiff ) || dayDiff < 0 ) return ""

      function duration( value ) {
        return localize( value )
      }
      return (
        ( diff < 86400 && lastTried > midnight && duration( "today" ) ) || ( dayDiff == 1 && "yesterday" ) || ( dayDiff < 7 && dayDiff + " " + duration( "days ago" ) ) || ( dayDiff < 31 && Math.round( dayDiff / 7 ) + " " + duration(
          "weeks ago" ) ) || ( dayDiff <
          366 && Math.round(
            dayDiff /
            30 ) + " " + duration( "months ago" ) ) || ( dayDiff > 365 && duration( "long time ago" ) ) )
    },
    selectedIndexChange( args ) {
      this.selectedTabIndex = args.object.selectedIndex
      this.viewIsScrolled = this.isScrolled[ this.selectedTabIndex ]
    },
    showLastTried() {
      feedback.show( {
        title: `${localize('You tried this recipe:')} ${this.niceDates(
          this.recipe.lastTried
        )}`,
        titleColor: new Color( `${this.isLightMode ? "#f1f3f5" : "#212529"}` ),
        backgroundColor: new Color( "#ff5200" ),
      } )
    },
    roundedQuantity( quantity ) {
      return Math.abs( Math.round(
        ( quantity / this.recipe.yield.quantity ) * this.positiveYieldMultiplier * 100 ) / 100 )
    },
    keepScreenOn( boolean ) {
      let activity = Application.android.foregroundActivity || Application.android.startActivity
      let window = activity.getWindow()
      if ( boolean ) window.addFlags( android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON )
      else window.clearFlags( android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON )
    },
    formattedTime( time ) {
      let t = time.split( ":" )
      let h = parseInt( t[ 0 ] )
      let m = parseInt( t[ 1 ] )
      let hr = localize( 'hr' )
      let min = localize( 'min' )
      return h ? ( m ? `${h} ${hr} ${m} ${min}` : `${h} ${hr}` ) : `${m} ${min}`
    },
    isValidURL( string ) {
      let pattern = new RegExp( "^https?|^www", "ig" )
      return pattern.test( string )
    },
    getCombinationTitle( id ) {
      return this.recipes.filter( ( e ) => e.id === id )[ 0 ].title
    },
    syncCombinations() {
      let combinationForOtherRecipes = this.recipes.filter(
        ( e ) => e.combinations.indexOf( this.currentRecipeID ) >= 0 || this.recipe.combinations.includes( e.id ) ).map( ( e ) => e.id )
      this.recipe.combinations = combinationForOtherRecipes
      this.overwriteRecipeAction( {
        id: this.currentRecipeID,
        recipe: this.recipe,
      } )
    },
    // NAVIGATION HANDLERS
    onScroll( args ) {
      this.viewIsScrolled = this.isScrolled[ this.selectedTabIndex ] = args.scrollY > 8 ? true : false
    },
    editRecipe() {
      this.showFab = false
      this.busy = true
      this.$navigateTo( EditRecipe, {
        props: {
          navigationFromView: true,
          filterTrylater: this.filterTrylater,
          recipeID: this.currentRecipeID,
        },
        backstackVisible: false,
      } )
    },
    viewCombination( combination ) {
      this.recipe = this.recipes.filter( ( e ) => e.id === combination )[ 0 ]
      this.currentRecipeID = combination
      this.syncCombinations()
      this.selectedTabIndex = 0
      setTimeout(
        ( e ) => this.recipe.tried && this.recipe.lastTried && this.showLastTried(), 500 )
    },
    // SHARE ACTION
    shareHandler() {
      if ( this.recipe.imageSrc ) {
        this.$showModal( ShareChooser, {
          props: {
            title: "Share",
          },
        } ).then( ( result ) => {
          switch ( result ) {
            case "photo":
              ImageSource.fromFile( this.recipe.imageSrc ).then( ( res ) => {
                SocialShare.shareImage( res, "Share recipe photo using" )
              } )
              break
            case "recipe":
              this.shareRecipe()
              break
            default:
              break
          }
        } )
      }
      else {
        this.shareRecipe()
      }
    },
    shareRecipe() {
      let overview = `${
        this.recipe.title
      }\n\n${localize("Preparation time")}: ${this.formattedTime(
        this.recipe.prepTime
      )}\n${localize( "Cooking time" )}: ${this.formattedTime(this.recipe.cookTime)}\n`
      let shareContent = overview
      if ( this.recipe.ingredients.length ) {
        let ingredients = `\n\n${localize( "Ingredients" )} (${
          this.yieldMultiplier
        } ${localize( this.recipe.yield.unit )})\n\n`
        this.recipe.ingredients.forEach( ( e ) => {
          ingredients += `- ${
            e.quantity
              ? this.roundedQuantity(e.quantity) + " " + e.unit + " "
              : ""
          }${e.item}\n`
        } )
        shareContent += ingredients
      }
      if ( this.recipe.instructions.length ) {
        let instructions = `\n\n${localize( "Instructions" )}:\n\n`
        this.recipe.instructions.forEach( ( e, i ) => {
          instructions += `${i + 1}. ${e}\n\n`
        } )
        shareContent += instructions
      }
      if ( this.recipe.combinations.length ) {
        let combinations = `\n${localize( "Combinations" )}:\n\n`
        this.recipe.combinations.forEach( ( e, i ) => {
          combinations += `${i + 1}. ${this.getCombinationTitle(e)}\n\n`
        } )
        shareContent += combinations
      }
      if ( this.recipe.notes.length ) {
        let notes = `\n${localize( "Notes" )}:\n\n`
        this.recipe.notes.forEach( ( e, i ) => {
          notes += `${i + 1}. ${e}\n\n`
        } )
        shareContent += notes
      }
      let sharenote = '\n' + localize( "Shared via EnRecipes. Get it on Play Store or F-Droid." )
      shareContent += sharenote
      SocialShare.shareText( shareContent, "Share recipe using" )
    },
    // DATA HANDLERS
    toggle( key, setDate ) {
      this.toggleStateAction( {
        id: this.currentRecipeID,
        recipe: this.recipe,
        key,
        setDate,
      } )
    },
    toggleFavourite() {
      this.recipe.isFavorite ? Toast.makeText( localize( "Removed from Favourites" ) ).show() : Toast.makeText( localize( "Added to Favourites" ) ).show()
      this.toggle( "isFavorite" )
    },
    toggleTrylater() {
      this.recipe.tried ? Toast.makeText( localize( "Added to Try Later" ) ).show() : Toast.makeText(
        localize( "Removed from Try Later" ) ).show()
      this.toggle( "tried" )
    },
    recipeTried() {
      this.setRecipeAsTriedAction( {
        id: this.currentRecipeID,
        recipe: this.recipe,
      } )
      this.$navigateBack()
    },
    // NOTES
    createNote( note ) {
      const vm = this
      let regex = /(https?:\/\/[^\s]+)/g
      let label = new Label()
      label.class = "textCard"
      label.textWrap = true
      let formattedString = new FormattedString()
      let textArray = note.split( regex )

      function createSpan( text, isUrl ) {
        let span = new Span()
        span.text = text
        span.fontSize = 16
        if ( isUrl ) {
          span.textDecoration = "underline"
          span.color = "#ff5200"
          span.on( "linkTap", () => Utils.openUrl( text ) )
        }
        formattedString.spans.push( span )
      }
      textArray.forEach( ( text ) => {
        createSpan( text, regex.test( text ) )
      } )
      label.formattedText = formattedString
      return label
    },
    createNotes( args ) {
      const stack = args.object
      if ( !stack.getChildrenCount() ) {
        this.recipe.notes.forEach( ( note ) => {
          stack.addChild( this.createNote( note ) )
        } )
      }
    },
  },
  created() {
    this.recipe = this.recipes.filter( ( e ) => e.id === this.currentRecipeID )[ 0 ]
  },
  mounted() {
    this.showFab = true
    setTimeout(
      ( e ) => this.recipe.tried && this.recipe.lastTried && this.showLastTried(), 500 )
  },
}
</script>
