{include file='header.tpl' p="article"}

<br />
<table width="886" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td width="150" valign="top">
            <div id="reg_box">
                <h3 class="captions flex">{$lang.articles}</h3>
                <div id="list_cats">
                    <ul>
                        {$article_categories}
                    </ul>
                </div>
            </div>
            <br />
            <div id="reg_box">
                <h3 class="captions">{$lang.members}</h3>
                {if $logged_in == '1'}
                {include file='loggedin_body.tpl'}
                {else}
                {include file='login_body.tpl'}
{/if}
