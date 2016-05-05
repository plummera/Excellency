<?php

/* themes/custom/excellency/templates/page.html.twig */
class __TwigTemplate_b63554601d12f7d71488db32e00a4c1d5bb54905797f8caeb7f4e8d256a202d3 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<div class=\"layout-container\">

  <div class=\"menu\">
    <ul>
      <li><a href=\"#\">Home</a></li>
      <li><a href=\"#\">The Excellence</a></li>
      <li><a href=\"#\">Links</a></li>
      <li><a href=\"#\">Contact</a></li>
    </ul>
  </div>

  <div class=\"container\">
    <div class=\"jumbotron\">
      <h1>Project Excellence</h1>
      <p>This is a sample project to serve as a simple exercise utilizing the ScollMagicJS library for Parallax scrolling in conjuction with the GreenSock animation framework.</p>
    </div>
  </div>

  <div id=\"splash-image\" width=\"400px\" height=\"400px\"></div>

  <header role=\"banner\">
    ";
        // line 22
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "html", null, true));
        echo "
  </header>

  <div class=\"container\">
    <div class=\"col-md-12\">
      <main role=\"main\">
        <a id=\"main-content\" tabindex=\"-1\"></a>

        <div id=\"content\" class=\"layout-content\">
          ";
        // line 31
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), "html", null, true));
        echo "
        </div>

      </main>
    </div>
  </div>

  <div id=\"haiku\" class=\"container\">
    <div class=\"row\">
      <div class=\"col-sm-4\">
        <h3>Whiskers</h3>
        <p>Black cat like magnet,</p>
        <p>attracts light material.</p>
        <p>Classic cat artwork.</p>
      </div>
      <div class=\"col-sm-4\">
        <h3>The</h3>
        <p>The rule for today;</p>
        <p>touch my tail, I shred your hand.</p>
        <p>New rule tomorrow.</p>
      </div>
      <div class=\"col-sm-4\">
        <h3>Cat</h3>
        <p>You're always typing.</p>
        <p>Well, let's see you ignore my</p>
        <p>sitting on your hands.</p>
      </div>
    </div>
  </div>

  <footer class=\"footer\" role=\"contentinfo\">
    ";
        // line 62
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer", array()), "html", null, true));
        echo "
  </footer>

</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/excellency/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 62,  78 => 31,  66 => 22,  43 => 1,);
    }
}
/* <div class="layout-container">*/
/* */
/*   <div class="menu">*/
/*     <ul>*/
/*       <li><a href="#">Home</a></li>*/
/*       <li><a href="#">The Excellence</a></li>*/
/*       <li><a href="#">Links</a></li>*/
/*       <li><a href="#">Contact</a></li>*/
/*     </ul>*/
/*   </div>*/
/* */
/*   <div class="container">*/
/*     <div class="jumbotron">*/
/*       <h1>Project Excellence</h1>*/
/*       <p>This is a sample project to serve as a simple exercise utilizing the ScollMagicJS library for Parallax scrolling in conjuction with the GreenSock animation framework.</p>*/
/*     </div>*/
/*   </div>*/
/* */
/*   <div id="splash-image" width="400px" height="400px"></div>*/
/* */
/*   <header role="banner">*/
/*     {{ page.header }}*/
/*   </header>*/
/* */
/*   <div class="container">*/
/*     <div class="col-md-12">*/
/*       <main role="main">*/
/*         <a id="main-content" tabindex="-1"></a>*/
/* */
/*         <div id="content" class="layout-content">*/
/*           {{ page.content }}*/
/*         </div>*/
/* */
/*       </main>*/
/*     </div>*/
/*   </div>*/
/* */
/*   <div id="haiku" class="container">*/
/*     <div class="row">*/
/*       <div class="col-sm-4">*/
/*         <h3>Whiskers</h3>*/
/*         <p>Black cat like magnet,</p>*/
/*         <p>attracts light material.</p>*/
/*         <p>Classic cat artwork.</p>*/
/*       </div>*/
/*       <div class="col-sm-4">*/
/*         <h3>The</h3>*/
/*         <p>The rule for today;</p>*/
/*         <p>touch my tail, I shred your hand.</p>*/
/*         <p>New rule tomorrow.</p>*/
/*       </div>*/
/*       <div class="col-sm-4">*/
/*         <h3>Cat</h3>*/
/*         <p>You're always typing.</p>*/
/*         <p>Well, let's see you ignore my</p>*/
/*         <p>sitting on your hands.</p>*/
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* */
/*   <footer class="footer" role="contentinfo">*/
/*     {{ page.footer }}*/
/*   </footer>*/
/* */
/* </div>*/
/* */
